// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    base: './', // Change this if your HTML files are in a subdirectory
    build: {
        outDir: 'dist', // The output directory for the build
    },
});