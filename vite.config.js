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
			  short_name: 'Portfolio',  
			  description: 'Anton Nageh Portfolio',  
			  theme_color: '#ffffff',  
			  start_url: '/',  
			  icons: [  
		{  
		src: 'pwa-192x192.png',  
				  sizes: '192x192',  
				  type: 'image/png',  
				},  
				{  
		src: 'pwa-512x512.png',  
				  sizes: '512x512',  
				  type: 'image/png',  
				},  
			  ],  
			},  
		  }),  
		]
});
