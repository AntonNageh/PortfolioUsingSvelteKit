export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/CV.pdf","assets/particles.json","favicon.png","images/profile.webp"]),
	mimeTypes: {".pdf":"application/pdf",".json":"application/json",".png":"image/png",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.804895c3.js","app":"_app/immutable/entry/app.2cfe5161.js","imports":["_app/immutable/entry/start.804895c3.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/singletons.2acd285f.js","_app/immutable/entry/app.2cfe5161.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.1673c172.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
