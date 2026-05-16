import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		sveltekit(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'images/**/*'],
			manifest: {
				name: 'Anton Nageh - Front-end Developer Portfolio',
				description: 'Creative portfolio showcasing innovative web applications and user experiences',
				short_name: 'Anton Portfolio',
				start_url: '/',
				display: 'standalone',
				background_color: '#ffffff',
				theme_color: '#2563EB',
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
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff,woff2}'],
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-fonts-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
							},
							cacheableResponse: {
								statuses: [0, 200]
							}
						}
					},
					{
						urlPattern: /^https:\/\/unpkg\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'unpkg-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
							}
						}
					}
				]
			}
		}),
	],
	build: {
		cssCodeSplit: true,
		rollupOptions: {
			output: {
				manualChunks: {
					'svelte-vendor': ['svelte']
				}
			}
		}
	},
	optimizeDeps: {
		include: ['svelte']
	}
});