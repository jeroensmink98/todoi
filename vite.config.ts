import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), SvelteKitPWA()],
})
