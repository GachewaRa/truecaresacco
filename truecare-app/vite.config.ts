
// ===== FILE 1: vite.config.js =====
// THIS IS THE MAIN FIX - Add the Tailwind Vite plugin
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit()
  ]
});