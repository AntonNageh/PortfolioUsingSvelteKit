<script>
	import { onMount } from 'svelte';
	import { PROJECTS, TABS, EXPERIENCE, cropStyle } from '$lib/projects.js';
	import { createShelf } from '$lib/shelf-engine.js';
	import '$lib/vhs-shelf.css';

	const copies = [0, 1, 2];
	let root;
	let stop = () => {};
	let theme = 'light';

	function applyTheme(next) {
		theme = next;
		document.documentElement.dataset.theme = next;
		localStorage.setItem('anton-theme', next);
	}

	function toggleTheme() {
		applyTheme(theme === 'dark' ? 'light' : 'dark');
	}

	onMount(() => {
		const saved = localStorage.getItem('anton-theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		applyTheme(saved === 'dark' || saved === 'light' ? saved : prefersDark ? 'dark' : 'light');
		const api = createShelf(root);
		stop = api.destroy;
		return () => stop();
	});
</script>

<svelte:head>
	<title>Anton Nageh — Works</title>
</svelte:head>

<div class="site" bind:this={root}>
	<header class="topbar">
		<a class="lbl box topbar__back" href="/assets/CV.pdf" target="_blank" rel="noreferrer">CV</a>
		<div class="topbar__brand">
			<a class="logo" href="#works">
				<span class="logo__name">Anton Nageh</span>
				<span class="logo__en">Cairo · Egypt</span>
			</a>
		</div>
		<div class="topbar__end">
			<button class="lbl box theme-toggle" type="button" on:click={toggleTheme} aria-label="Toggle color theme">
				{theme === 'dark' ? 'Light' : 'Dark'}
			</button>
		</div>
	</header>

	<div class="vhs" id="works">
		<nav class="tabs" aria-label="Years">
			<div class="tabs__track">
				<div class="tabs__ind"></div>
				{#each TABS as tab}
					<button type="button" class="lbl" data-tab={tab.id}>{tab.label}</button>
				{/each}
			</div>
		</nav>
		<div class="grain" aria-hidden="true"></div>
		<div class="probe" aria-hidden="true"></div>

		<section class="shelf" aria-label="Project shelf">
			<div class="stage">
				{#each copies as copy}
					{#each PROJECTS as project, i}
						{@const v = copy * PROJECTS.length + i}
						{@const sp = cropStyle('spine', project)}
						{@const cv = cropStyle('cover', project)}
						<div class="tape" data-v={v} data-id={project.id}>
							<div
								class="sp"
								style="background-image:{sp.backgroundImage};background-size:{sp.backgroundSize};background-position:{sp.backgroundPosition}"
							>
								<span class="sp__title">{project.title}</span>
								<span class="sp__year">{project.year}</span>
							</div>
							<div
								class="cv"
								style="background-image:{cv.backgroundImage};background-size:{cv.backgroundSize};background-position:{cv.backgroundPosition}"
							>
								<div class="cv__copy">
									<span class="cv__kicker">{project.subtitle}</span>
									<span class="cv__title">{project.title}</span>
									<span class="cv__year">{project.year}</span>
								</div>
							</div>
						</div>
					{/each}
				{/each}
			</div>
		</section>

		<button class="play" type="button" aria-label="Open project">
			<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
				<polygon points="2,1 11,6 2,11" fill="currentColor" />
			</svg>
		</button>

		<div class="caption" aria-live="polite">
			<div class="cap-mask cap-title" data-cap="title"></div>
			<div class="cap-mask cap-sub lbl" data-cap="sub"></div>
			<div class="cap-mask cap-year" data-cap="year"></div>
		</div>

		<button class="arrow arrow--l" type="button" aria-label="Previous project">
			<svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
				<path d="M5 1 L1 5 L5 9 M1 5 H17" stroke="currentColor" stroke-width="1.2" />
			</svg>
		</button>
		<button class="arrow arrow--r" type="button" aria-label="Next project">
			<svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden="true">
				<path d="M13 1 L17 5 L13 9 M17 5 H1" stroke="currentColor" stroke-width="1.2" />
			</svg>
		</button>

		<p class="scroll-hint lbl">Scroll for experience</p>

		<div class="cursor" aria-hidden="true">
			<div class="cursor__ring"></div>
			<div class="cursor__dot"></div>
			<div class="cursor__lab">Select</div>
		</div>

		<div class="detail" role="dialog" aria-modal="true" aria-label="Project detail">
			<button class="lbl box detail__close" type="button">Close</button>
			<div class="detail__logo">
				<div class="logo">
					<span class="logo__name">Anton Nageh</span>
					<span class="logo__en">Cairo · Egypt</span>
				</div>
			</div>
			<div class="detail__grid">
				<div class="detail__copy">
					<div class="d-mask d-sub lbl" data-d="sub"><span></span></div>
					<h2 class="d-mask d-title" data-d="title"><span></span></h2>
					<div class="d-mask d-meta lbl" data-d="meta"><span></span></div>
					<p class="d-mask d-syn" data-d="syn"><span></span></p>
					<p class="d-mask d-credit" data-d="credit"><span></span></p>
					<a class="lbl box d-watch" data-d="watch" target="_blank" rel="noreferrer">Open the live project</a>
					<div class="d-stores" data-d="stores" hidden></div>
				</div>
				<div class="d-poster">
					<svg viewBox="0 0 474 900" aria-hidden="true">
						<defs>
							<filter id="ink" x="-20%" y="-20%" width="140%" height="140%">
								<feTurbulence
									type="fractalNoise"
									baseFrequency="0.011"
									numOctaves="3"
									seed="7"
									result="n"
								/>
								<feDisplacementMap in="SourceGraphic" in2="n" scale="120" xChannelSelector="R" yChannelSelector="G" />
							</filter>
							<clipPath id="poster-clip">
								<rect width="474" height="900" />
							</clipPath>
							<mask id="ink-mask" maskUnits="userSpaceOnUse" x="-200" y="-200" width="874" height="1300">
								<g id="ink-blobs" filter="url(#ink)">
									<circle cx="150" cy="330" r="0" fill="#fff" />
									<circle cx="340" cy="600" r="0" fill="#fff" />
									<circle cx="250" cy="120" r="0" fill="#fff" />
									<circle cx="90" cy="760" r="0" fill="#fff" />
									<circle cx="400" cy="250" r="0" fill="#fff" />
									<circle cx="260" cy="860" r="0" fill="#fff" />
									<circle cx="230" cy="470" r="0" fill="#fff" />
								</g>
							</mask>
						</defs>
						<g clip-path="url(#poster-clip)" mask="url(#ink-mask)">
							<image id="poster-img" preserveAspectRatio="xMidYMid slice" href="" width="474" height="900" />
						</g>
					</svg>
				</div>
			</div>
		</div>
	</div>

	<section class="panel" id="experience">
		<header class="panel__head">
			<p class="lbl panel__kicker">Recent experience</p>
			<h2>Work, training, and the products I ship from Cairo.</h2>
		</header>
		<ol class="timeline">
			{#each EXPERIENCE as item}
				<li class="timeline__item">
					<div class="timeline__meta">
						<span class="lbl">{item.dates}</span>
						<span class="timeline__place">{item.place}</span>
					</div>
					<div class="timeline__body">
						<h3>{item.role}</h3>
						<p class="timeline__org">{item.org}</p>
						<p>{item.detail}</p>
					</div>
				</li>
			{/each}
		</ol>
	</section>

	<section class="panel panel--contact" id="contact">
		<header class="panel__head">
			<p class="lbl panel__kicker">Contact</p>
			<h2>Let's build the next live product.</h2>
			<p class="panel__lead">
				Frontend and cross-platform developer in Cairo. Open to freelance, junior, and full-time roles.
			</p>
		</header>
		<div class="contact-grid">
			<a class="contact-card" href="mailto:anton.nageh20@gmail.com">
				<span class="lbl">Email</span>
				<strong>anton.nageh20@gmail.com</strong>
			</a>
			<a class="contact-card" href="https://www.linkedin.com/in/anton-nageh-772852169" target="_blank" rel="noreferrer">
				<span class="lbl">LinkedIn</span>
				<strong>anton-nageh</strong>
			</a>
			<a class="contact-card" href="https://github.com/AntonNageh" target="_blank" rel="noreferrer">
				<span class="lbl">GitHub</span>
				<strong>AntonNageh</strong>
			</a>
			<a class="contact-card" href="https://www.findmotos.com" target="_blank" rel="noreferrer">
				<span class="lbl">Live product</span>
				<strong>findmotos.com</strong>
			</a>
		</div>
		<footer class="site-foot">
			<span class="lbl">© Anton Nageh. All rights reserved.</span>
			<a class="lbl" href="#works">Back to works</a>
		</footer>
	</section>
</div>
