

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.319c7bb3.js","_app/immutable/chunks/scheduler.c358b412.js","_app/immutable/chunks/index.1673c172.js","_app/immutable/chunks/singletons.2acd285f.js"];
export const stylesheets = [];
export const fonts = [];
