export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","assets/CV.pdf","assets/particles.json","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","images/profile.mp4","images/profile.png","images/profile1.mp4","manifest.webmanifest","pwa-192x192.png","pwa-512x512.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf",".json":"application/json",".mp4":"video/mp4",".webmanifest":"application/manifest+json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BI-AKUw9.js",app:"_app/immutable/entry/app.DqiLGpV2.js",imports:["_app/immutable/entry/start.BI-AKUw9.js","_app/immutable/chunks/BZF9jhsn.js","_app/immutable/chunks/6QDxm65k.js","_app/immutable/chunks/BbY2RXiG.js","_app/immutable/entry/app.DqiLGpV2.js","_app/immutable/chunks/6QDxm65k.js","_app/immutable/chunks/CMU4q9gq.js","_app/immutable/chunks/BbY2RXiG.js","_app/immutable/chunks/D0Lct_rj.js","_app/immutable/chunks/DRq_iulo.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
