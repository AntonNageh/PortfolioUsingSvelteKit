function withArt(project) {
	const src = `/covers/${project.id}.jpg`;
	return { ...project, cover: src, spine: src };
}

export const PROJECTS = [
	withArt({
		id: 'twod',
		title: '2D Portfolio',
		subtitle: 'Side-scrolling world',
		year: 2022,
		genre: 'Play',
		meta: 'KABOOM / PWA',
		href: 'https://2dportfoliokaboom.netlify.app/',
		stores: [],
		synopsis:
			'A side-scrolling 2D world of my story, projects and ways to reach me — fully responsive and ready as a PWA.'
	}),
	withArt({
		id: 'burger',
		title: 'Burger App',
		subtitle: 'Custom sandwich shop',
		year: 2022,
		genre: 'Web',
		meta: 'CART / DEMO PAY',
		href: 'https://burgerclerkapp.netlify.app',
		stores: [],
		synopsis:
			'An interactive sandwich shop: browse a diverse menu, drop items in a cart with demo payment, or customise every detail of your own burger.'
	}),
	withArt({
		id: 'books',
		title: 'Books App Store',
		subtitle: 'Reading shop',
		year: 2022,
		genre: 'Web',
		meta: 'STORE / CATALOGUE',
		href: 'https://anton-mybookstore.vercel.app/',
		stores: [],
		synopsis:
			'A bookshop at your fingertips — browse stories that travel far, with a storefront built for discovering the next thing to read.'
	}),
	withArt({
		id: 'oldfolio',
		title: 'Recent Portfolio',
		subtitle: 'Spline and GSAP',
		year: 2023,
		genre: 'Play',
		meta: 'R3F / SPLINE / GSAP',
		href: 'https://portfoliootemplate.vercel.app/',
		stores: [],
		synopsis:
			'An earlier portfolio built with React, Vite, Tailwind, React Three Fiber, Spline, AI-generated video, and GSAP. Heavier than this shelf, kept as a record of that experiment.'
	}),
	withArt({
		id: 'hotels',
		title: 'Hotels Reservation',
		subtitle: 'Stay booking',
		year: 2023,
		genre: 'Web',
		meta: 'BOOKING / UNDEPLOYED',
		href: '',
		stores: [],
		synopsis:
			'Travel planning for stays from luxury getaways to budget rooms. This project is not deployed yet — the booking flow still lives locally.'
	}),
	withArt({
		id: 'perfumes',
		title: 'Perfumes App',
		subtitle: 'Scent catalogue',
		year: 2023,
		genre: 'Web',
		meta: 'SEARCH / CATALOGUE',
		href: 'https://perfumesapp.vercel.app',
		stores: [],
		synopsis:
			'A fragrance catalogue with advanced search so you can hunt a signature scent without wading through noise.'
	}),
	withArt({
		id: 'movies',
		title: 'My Movies',
		subtitle: 'Film catalogue app',
		year: 2023,
		genre: 'Mobile',
		meta: 'REACT NATIVE',
		href: 'https://github.com/AntonNageh/MyMovies-React-native-app',
		stores: [],
		synopsis:
			'A cinematic phone app for trending films, detailed movie info, and a browsing flow that keeps the catalogue in your pocket.'
	}),
	withArt({
		id: 'threed',
		title: '3D Portfolio',
		subtitle: 'Walkable rooms',
		year: 2024,
		genre: 'Play',
		meta: 'R3F / PWA',
		href: 'https://3dportfolioanton.netlify.app/',
		stores: [],
		synopsis:
			'A walkable 3D space with dedicated rooms for my story, projects and contact — responsive and installable as a PWA.'
	}),
	withArt({
		id: 'dash',
		title: 'Dashboard App',
		subtitle: 'Themed admin board',
		year: 2024,
		genre: 'Web',
		meta: 'CLERK / THEMES',
		href: 'http://dashboardsync.netlify.app/',
		stores: [],
		synopsis:
			'A themed admin surface with Clerk authentication, product and customer pages, and a theme editor so the board can match the brand.'
	}),
	withArt({
		id: 'sat',
		title: 'Graduation Project',
		subtitle: 'Satellite and rover',
		year: 2024,
		genre: 'Lab',
		meta: 'SATELLITE / ROVER',
		href: 'https://iaetsatellite.vercel.app/',
		stores: [],
		synopsis:
			'A graduation piece about exploring distant planets: a satellite and rover that unveil what sits beyond the map.'
	}),
	withArt({
		id: 'secured',
		title: 'Secured',
		subtitle: 'Secured logistics',
		year: 2024,
		genre: 'Mobile',
		meta: 'REACT NATIVE / SUPABASE',
		href: 'https://github.com/AntonNageh/Secured-App',
		stores: [],
		synopsis:
			'A React Native and Supabase logistics app: goods move from airport intake into a secured warehouse, then leave as tracked orders to real clients.'
	}),
	withArt({
		id: 'hafenz',
		title: 'Hafenz',
		subtitle: 'Warehouse management',
		year: 2025,
		genre: 'Systems',
		meta: 'QR / LOGISTICS',
		href: 'https://egwarehouse.vercel.app',
		stores: [],
		synopsis:
			'A live warehouse system that tracks stock from arrival to delivery. Clients see only their own inventory and place orders; handlers scan QR codes to move each stage along.'
	}),
	withArt({
		id: 'findmotos',
		title: 'FindMotos',
		subtitle: 'Car marketplace',
		year: 2026,
		genre: 'Mobile',
		meta: 'REACT NATIVE / FIREBASE',
		href: 'https://www.findmotos.com',
		stores: [
			{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.findmotos' },
			{ label: 'App Store', href: 'https://apps.apple.com/eg/app/findmotos-buy-sell-cars/id6809363017' }
		],
		synopsis:
			"Egypt's live marketplace for buying and selling cars. Browse listings and dealerships, save favourites, read specs and contact sellers by phone or WhatsApp — or list a vehicle with AI-assisted photos."
	})
];

export const TABS = [
	{ id: '2022', label: '2022' },
	{ id: '2023', label: '2023' },
	{ id: '2024', label: '2024' },
	{ id: '2025', label: '2025' },
	{ id: '2026', label: '2026' }
];

export const START_INDEX = PROJECTS.findIndex((p) => p.id === 'findmotos');

export function tabForYear(year) {
	return String(year);
}

export function projectStores(project) {
	return (project.stores ?? []).filter((store) => store?.href);
}

export function firstIndexForTab(tabId) {
	const i = PROJECTS.findIndex((p) => String(p.year) === String(tabId));
	return i >= 0 ? i : 0;
}

export function cropStyle(kind, project) {
	return {
		backgroundImage: `url("${project.cover}")`,
		backgroundSize: 'cover',
		backgroundPosition: kind === 'spine' ? '18% center' : 'center'
	};
}

export function posterImageAttrs(project) {
	return {
		href: project.cover,
		x: 0,
		y: 0,
		width: 474,
		height: 900
	};
}

export function preloadSheets() {
	PROJECTS.forEach((p) => {
		[p.cover, p.spine].forEach((src) => {
			const img = new Image();
			img.src = src;
		});
	});
}

export const EXPERIENCE = [
	{
		role: 'Product engineer',
		org: 'FindMotos',
		dates: '2025 — Present',
		place: 'Cairo, Egypt',
		detail:
			"Building Egypt's live car marketplace from day one — listings, dealerships, seller contact, and AI-assisted listing photos on web, Android, and iOS."
	},
	{
		role: 'Frontend & Cross-Platform trainee',
		org: 'Information Technology Institute (ITI)',
		dates: 'Mar 2025 — Aug 2025',
		place: 'Cairo University',
		detail:
			'Intensive track covering React, Next.js, React Native, Flutter, Firebase, REST APIs, testing, and Git. Graduated the Frontend and Cross-Platform Mobile Development programme.'
	},
	{
		role: 'IT member',
		org: 'IEEE',
		dates: 'Oct 2022 — Jul 2023',
		place: 'Egypt',
		detail: 'Contributed to technical community work while finishing an electronics and communications engineering degree.'
	},
	{
		role: 'IT-Web member & instructor',
		org: 'Pixels Egypt',
		dates: 'Oct 2021 — Oct 2022',
		place: 'Helwan University',
		detail:
			'Taught web fundamentals and helped run student workshops in communications, computer, and software tracks.'
	}
];
