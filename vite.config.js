import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({
	plugins: [sveltekit(),
		VitePWA({  
			registerType: 'prompt',  
			includeAssets: ['favicon.ico', 'apple-touch-icon.png'],  
			manifest: {  
				name: 'Portfolio',  
				description: 'Anton Nageh Portfolio',  
				short_name: 'Portfolio',  
				start_url: '/',  
				theme_color: '#ffffff',  
		icons: [  
		{  
			src: 'pwa-192x192.png',  
			type: 'image/png',  
			sizes: '192x192',  
		},  
		{  
			src: 'pwa-512x512.png',  
			type: 'image/png',  
			sizes: '512x512',  
		}, 
		{  
			src: 'pwa-512x512.png',  
			type: 'image/png',  
			purpose: 'any maskable',  
			sizes: '512x512',  
		},   
			  ],  
			},  
		  }),  
		]
});
