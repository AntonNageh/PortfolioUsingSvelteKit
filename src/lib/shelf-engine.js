import {
	PROJECTS,
	START_INDEX,
	tabForYear,
	firstIndexForTab,
	posterImageAttrs,
	preloadSheets,
	projectStores
} from './projects.js';

const N = PROJECTS.length;
const COPIES = 3;
const TAPES = N * COPIES;
const HALF = TAPES / 2;
const EASE = 'cubic-bezier(.2,.8,.2,1)';
const SHEET_EASE = 'cubic-bezier(.76,0,.18,1)';
const BLOBS = [
	{ i: 0, delay: 0 },
	{ i: 1, delay: 120 },
	{ i: 2, delay: 220 },
	{ i: 3, delay: 300 },
	{ i: 4, delay: 360 },
	{ i: 5, delay: 420 },
	{ i: 6, delay: 180 }
];

function clamp(v, a, b) {
	return Math.max(a, Math.min(b, v));
}

function lerp(a, b, t) {
	return a + (b - a) * t;
}

function smoothstep(x) {
	x = clamp(x, 0, 1);
	return x * x * (3 - 2 * x);
}

function B(r) {
	const a = Math.abs(r);
	if (a < 1) return (r + Math.sin(Math.PI * r) / Math.PI) / 2;
	return Math.sign(r) * 0.5;
}

function F(r, ws, gap, d) {
	return r * (ws + gap) + (d - ws + 1.6 * gap) * B(r);
}

function wrapRel(v, s) {
	let r = ((v - s) % TAPES + TAPES) % TAPES;
	if (r > HALF) r -= TAPES;
	return r;
}

function mod(n, m) {
	return ((n % m) + m) % m;
}

function reduced() {
	return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function createShelf(root) {
	preloadSheets();

	const stage = root.querySelector('.stage');
	const probe = root.querySelector('.probe');
	const tapes = [...root.querySelectorAll('.tape')];
	const tabsEl = root.querySelector('.tabs__track');
	const tabBtns = [...root.querySelectorAll('[data-tab]')];
	const ind = root.querySelector('.tabs__ind');
	const play = root.querySelector('.play');
	const cursor = root.querySelector('.cursor');
	const detail = root.querySelector('.detail');
	const posterImg = root.querySelector('#poster-img');
	const blobGroup = root.querySelector('#ink-blobs');
	const blobs = [...root.querySelectorAll('#ink-blobs circle')];
	const cap = {
		title: root.querySelector('[data-cap="title"]'),
		sub: root.querySelector('[data-cap="sub"]'),
		year: root.querySelector('[data-cap="year"]')
	};
	const d = {
		sub: root.querySelector('[data-d="sub"] span'),
		title: root.querySelector('[data-d="title"] span'),
		meta: root.querySelector('[data-d="meta"] span'),
		syn: root.querySelector('[data-d="syn"] span'),
		credit: root.querySelector('[data-d="credit"] span'),
		watch: root.querySelector('[data-d="watch"]'),
		stores: root.querySelector('[data-d="stores"]')
	};

	let W = window.innerWidth;
	let H = probe.offsetHeight;
	let ws = (H * 142) / 840;
	let depth = (H * 474) / 900;
	let gap = H * 0.03;
	let s = START_INDEX + N;
	let T = s;
	let hover = -1;
	let lifts = new Float32Array(TAPES);
	let active = START_INDEX;
	let mx = W / 2;
	let my = window.innerHeight / 2;
	let cx = mx;
	let cy = my;
	let tiltX = 0;
	let tiltY = 0;
	let onCover = false;
	let isOpen = false;
	let dragging = false;
	let dragArmed = false;
	let dragX0 = 0;
	let dragT0 = 0;
	let downTape = null;
	const cursorLab = cursor.querySelector('.cursor__lab');
	let wheelTimer = 0;
	let last = performance.now();
	let raf = 0;
	let inkRaf = 0;
	let inkStart = 0;
	const anims = [];

	stage.style.setProperty('--ws', `${ws}px`);
	stage.style.setProperty('--d', `${depth}px`);

	function measure() {
		W = window.innerWidth;
		H = probe.offsetHeight;
		ws = (H * 142) / 840;
		depth = (H * 474) / 900;
		gap = H * 0.03;
		stage.style.setProperty('--ws', `${ws}px`);
		stage.style.setProperty('--d', `${depth}px`);
	}

	function setTab(id) {
		const btn = tabBtns.find((b) => b.dataset.tab === id) || tabBtns[0];
		ind.style.width = `${btn.offsetWidth}px`;
		ind.style.transform = `translateX(${btn.offsetLeft}px)`;
		tabBtns.forEach((b) => b.classList.toggle('is-on', b === btn));
	}

	function slideLine(mask, text, dir) {
		const reduce = reduced();
		const next = document.createElement('span');
		next.textContent = text;
		mask.appendChild(next);
		const kids = [...mask.children];
		kids.forEach((el, i) => {
			if (i === 0) return;
			el.style.position = 'absolute';
			el.style.inset = '0';
		});
		if (reduce) {
			kids.slice(0, -1).forEach((el) => el.remove());
			next.style.transform = 'none';
			return;
		}
		next.animate([{ transform: `translateY(${dir * 105}%)` }, { transform: 'translateY(0)' }], {
			duration: 650,
			easing: EASE,
			fill: 'both'
		});
		kids.slice(0, -1).forEach((el) => {
			if (el.dataset.leaving) return;
			el.dataset.leaving = '1';
			const from = el.style.transform || 'translateY(0)';
			el.animate([{ transform: from }, { transform: `translateY(${-dir * 105}%)` }], {
				duration: 650,
				easing: EASE,
				fill: 'both'
			}).onfinish = () => el.remove();
		});
	}

	function setActive(i, dir) {
		active = mod(i, N);
		const p = PROJECTS[active];
		slideLine(cap.title, p.title, dir);
		slideLine(cap.sub, p.subtitle, dir);
		slideLine(cap.year, String(p.year), dir);
		setTab(tabForYear(p.year));
	}

	function shortestTarget(from, toIndex) {
		const cur = mod(Math.round(from), N);
		let delta = toIndex - cur;
		if (delta > N / 2) delta -= N;
		if (delta < -N / 2) delta += N;
		return Math.round(from) + delta;
	}

	function fillDetail() {
		const p = PROJECTS[active];
		d.sub.textContent = p.subtitle;
		d.title.textContent = p.title;
		d.meta.textContent = `${p.year} / ${p.genre.toUpperCase()} / ${p.meta}`;
		d.syn.textContent = p.synopsis;
		d.credit.textContent = 'Designed and built by Anton Nageh in Cairo.';
		if (p.href) {
			d.watch.href = p.href;
			d.watch.style.display = '';
		} else {
			d.watch.removeAttribute('href');
			d.watch.style.display = 'none';
		}
		const stores = projectStores(p);
		d.stores.hidden = stores.length === 0;
		d.stores.replaceChildren(
			...stores.map((store) => {
				const a = document.createElement('a');
				a.className = 'lbl box d-store';
				a.href = store.href;
				a.target = '_blank';
				a.rel = 'noreferrer';
				a.textContent = store.label;
				return a;
			})
		);
		const img = posterImageAttrs(p);
		posterImg.setAttribute('href', img.href);
		posterImg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', img.href);
		posterImg.setAttribute('x', String(img.x));
		posterImg.setAttribute('y', String(img.y));
		posterImg.setAttribute('width', String(img.width));
		posterImg.setAttribute('height', String(img.height));
	}

	function coverRect() {
		const v = Math.round(s);
		const el = tapes[mod(v, TAPES)];
		const face = el?.querySelector('.cv');
		return face.getBoundingClientRect();
	}

	function insetFromRect(r) {
		return `inset(${r.top}px ${W - r.right}px ${window.innerHeight - r.bottom}px ${r.left}px round 3px)`;
	}

	function runInk(fromPast) {
		cancelAnimationFrame(inkRaf);
		blobs.forEach((c) => c.setAttribute('r', '0'));
		inkStart = performance.now() - (fromPast ? 5000 : 0);
		const tick = (now) => {
			const t = now - inkStart;
			blobs.forEach((c, i) => {
				const local = clamp((t - 520 - BLOBS[i].delay) / 1250, 0, 1);
				const p = 1 - (1 - local) ** 3;
				c.setAttribute('r', String(p * 720));
			});
			if (t < 2400) inkRaf = requestAnimationFrame(tick);
		};
		inkRaf = requestAnimationFrame(tick);
	}

	function openDetail() {
		if (isOpen) return;
		T = Math.round(T);
		s = T;
		isOpen = true;
		fillDetail();
		blobs.forEach((c) => c.setAttribute('r', '0'));
		const r = coverRect();
		const ox = r.left + r.width / 2;
		const oy = r.top + r.height / 2;
		document.documentElement.classList.add('detail-open');
		detail.classList.add('is-on');
		detail.style.transformOrigin = `${ox}px ${oy}px`;
		const dur = reduced() ? 1 : 1050;
		const a = detail.animate(
			[
				{ clipPath: insetFromRect(r), transform: 'rotate(-4.5deg)' },
				{ clipPath: 'inset(0 0 0 0 round 0)', transform: 'rotate(0deg)' }
			],
			{ duration: dur, easing: SHEET_EASE, fill: 'both' }
		);
		anims.push(a);
		root.querySelectorAll('.d-mask > span').forEach((el, i) => {
			const delay = reduced() ? 0 : 620 + i * 75;
			el.animate([{ transform: 'translateY(110%)' }, { transform: 'translateY(0)' }], {
				duration: reduced() ? 1 : 900,
				delay,
				easing: EASE,
				fill: 'both'
			});
		});
		runInk(reduced());
	}

	function closeDetail() {
		if (!isOpen) return;
		const r = coverRect();
		const ox = r.left + r.width / 2;
		const oy = r.top + r.height / 2;
		detail.style.transformOrigin = `${ox}px ${oy}px`;
		anims.forEach((a) => a.cancel());
		anims.length = 0;
		const a = detail.animate(
			[
				{ clipPath: 'inset(0 0 0 0 round 0)', transform: 'rotate(0deg)' },
				{ clipPath: insetFromRect(r), transform: 'rotate(-4.5deg)' }
			],
			{ duration: reduced() ? 1 : 850, easing: SHEET_EASE, fill: 'both' }
		);
		a.onfinish = () => {
			detail.classList.remove('is-on');
			document.documentElement.classList.remove('detail-open');
			a.cancel();
			isOpen = false;
		};
	}

	function go(delta) {
		if (isOpen) return;
		T = Math.round(T) + delta;
	}

	function jumpTo(index) {
		if (isOpen) return;
		T = shortestTarget(T, index);
	}

	function selectTape(v) {
		if (isOpen) return;
		T = shortestTarget(T, mod(v, N));
	}

	tapes.forEach((tape) => {
		tape.addEventListener('pointerenter', () => {
			hover = Number(tape.dataset.v);
		});
		tape.addEventListener('pointerleave', () => {
			if (hover === Number(tape.dataset.v)) hover = -1;
		});
	});

	root.querySelector('.arrow--l').addEventListener('click', () => go(-1));
	root.querySelector('.arrow--r').addEventListener('click', () => go(1));
	play.addEventListener('click', (e) => {
		e.stopPropagation();
		openDetail();
	});
	root.querySelector('.detail__close').addEventListener('click', closeDetail);

	tabBtns.forEach((btn) => {
		btn.addEventListener('click', () => jumpTo(firstIndexForTab(btn.dataset.tab)));
	});

	function onKey(e) {
		if (e.key === 'Escape') closeDetail();
		if (isOpen) return;
		if (e.key === 'ArrowLeft') go(-1);
		if (e.key === 'ArrowRight') go(1);
		if (e.key === 'Enter' && !e.target.closest('a, button, input, textarea')) openDetail();
	}

	function onWheel(e) {
		if (isOpen) {
			e.preventDefault();
			return;
		}
		if (Math.abs(e.deltaY) >= Math.abs(e.deltaX)) return;
		T += (e.deltaX / (ws + gap)) * 0.5;
		clearTimeout(wheelTimer);
		wheelTimer = setTimeout(() => {
			T = Math.round(T);
		}, 160);
	}

	function onDetailWheel(e) {
		e.preventDefault();
	}

	const shelf = root.querySelector('.shelf');

	function onDown(e) {
		if (isOpen) return;
		dragArmed = true;
		dragging = false;
		dragX0 = e.clientX;
		dragT0 = T;
		downTape = e.target.closest?.('.tape') || null;
		shelf.setPointerCapture?.(e.pointerId);
	}

	function onMove(e) {
		mx = e.clientX;
		my = e.clientY;
		if (!dragArmed || isOpen) return;
		const dx = e.clientX - dragX0;
		if (!dragging && Math.abs(dx) > 10) dragging = true;
		if (dragging) T = dragT0 - dx / (ws + gap);
	}

	function onUp() {
		const tape = downTape;
		const wasDragging = dragging;
		if (dragging) T = Math.round(T);
		dragArmed = false;
		dragging = false;
		downTape = null;
		if (wasDragging || isOpen || !tape) return;
		selectTape(Number(tape.dataset.v));
	}

	function onWinMove(e) {
		mx = e.clientX;
		my = e.clientY;
	}

	shelf.addEventListener('pointerdown', onDown);
	shelf.addEventListener('pointermove', onMove);
	shelf.addEventListener('pointerup', onUp);
	shelf.addEventListener('pointercancel', onUp);
	window.addEventListener('pointermove', onWinMove);
	window.addEventListener('keydown', onKey);
	shelf.addEventListener('wheel', onWheel, { passive: false });
	detail.addEventListener('wheel', onDetailWheel, { passive: false });
	window.addEventListener('resize', measure);

	setActive(active, 1);
	requestAnimationFrame(() => setTab(tabForYear(PROJECTS[active].year)));

	function frame(now) {
		const dt = Math.min(50, now - last) / 1000;
		last = now;
		const reduce = reduced();
		const k = dragging ? 18 : reduce ? 1e3 : 5.2;
		s += (T - s) * (1 - Math.exp(-k * dt));
		if (Math.abs(T - s) < 1e-4) s = T;
		if (Math.abs(s) > TAPES * 4) {
			const shift = Math.round(s / N) * N;
			s -= shift;
			T -= shift;
		}

		const next = mod(Math.round(s), N);
		if (next !== active) setActive(next, Math.sign(T - s) || 1);

		const shelfCy = shelf.getBoundingClientRect().top + shelf.clientHeight / 2;
		onCover =
			!isOpen &&
			Math.abs(T - s) < 0.3 &&
			Math.abs(mx - W / 2) < 0.55 * depth &&
			Math.abs(my - shelfCy) < 0.55 * H;

		let tY = onCover ? ((mx - W / 2) / (0.55 * depth)) * 9 : ((mx - W / 2) / W) * 5;
		let tX = onCover ? (-(my - shelfCy) / (H / 2)) * 6 : 0;
		const tk = 1 - Math.exp(-7 * dt);
		tiltY = lerp(tiltY, tY, tk);
		tiltX = lerp(tiltX, tX, tk);

		const ck = 1 - Math.exp(-16 * dt);
		cx = lerp(cx, mx, ck);
		cy = lerp(cy, my, ck);
		cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;

		const vr = root.getBoundingClientRect();
		cursor.style.opacity = my >= vr.top && my <= vr.bottom ? '1' : '0';
		const hit = document.elementFromPoint(mx, my);
		const overPlay = !!hit?.closest?.('.play');
		const overBtn = hit?.closest('button, a');
		const overShelfBtn = overBtn && shelf.contains(overBtn);
		const overTape = hover >= 0 && !isOpen;
		const selecting = !isOpen && !overPlay && (overTape || onCover);
		cursorLab.textContent = overPlay ? 'Open' : 'Select';
		cursor.classList.toggle('is-open', overPlay && !isOpen);
		cursor.classList.toggle('is-select', selecting);
		cursor.classList.toggle('is-spine', overTape && !overPlay && Math.abs(wrapRel(hover, s)) > 0.5);
		cursor.classList.toggle('is-btn', !!overBtn && !overShelfBtn && !overPlay && !onCover);

		const cull = W / 2 + 1.5 * depth;
		tapes.forEach((tape, v) => {
			const r = wrapRel(v, s);
			const x = F(r, ws, gap, depth);
			if (Math.abs(x) > cull) {
				tape.style.visibility = 'hidden';
				return;
			}
			tape.style.visibility = 'visible';
			const o = smoothstep(Math.max(0, 1 - Math.abs(r)));
			const targetLift = hover === v && Math.abs(r) > 0.5 ? 1 : 0;
			const lk = reduce ? 1 : 1 - Math.exp(-12 * dt);
			lifts[v] = lerp(lifts[v], targetLift, lk);
			const y = -o * 0.025 * H - lifts[v] * 0.045 * H;
			const z = o * 0.2 * H;
			const rotY = -90 * o + tiltY * o;
			const rotX = tiltX * o;
			const rotZ = -4.5 * o;
			tape.style.zIndex = String(Math.round(100 - Math.abs(r) * 4));
			tape.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${rotZ}deg) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
			tape.querySelector('.sp').style.setProperty('--shade', String(o * 0.55));
			tape.querySelector('.cv').style.setProperty('--shade', String((1 - o) * 0.5));
		});

		const playScale = isOpen ? 0 : smoothstep(Math.max(0, 1 - Math.abs(T - s) * 3));
		const vhsRect = (root.querySelector('.vhs') || root).getBoundingClientRect();
		play.style.left = `${W / 2 - 0.5 * depth - 6 - vhsRect.left}px`;
		play.style.top = `${shelfCy + 0.36 * H - vhsRect.top}px`;
		play.style.transform = `translate(-50%, -50%) scale(${playScale})`;
		play.style.pointerEvents = playScale > 0.65 ? 'auto' : 'none';

		raf = requestAnimationFrame(frame);
	}

	raf = requestAnimationFrame(frame);

	return {
		destroy() {
			cancelAnimationFrame(raf);
			cancelAnimationFrame(inkRaf);
			document.documentElement.classList.remove('detail-open');
			window.removeEventListener('pointermove', onWinMove);
			window.removeEventListener('keydown', onKey);
			shelf.removeEventListener('wheel', onWheel);
			detail.removeEventListener('wheel', onDetailWheel);
			window.removeEventListener('resize', measure);
		}
	};
}
