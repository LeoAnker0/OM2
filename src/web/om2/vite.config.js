// vite.config.js

import { defineConfig } from 'vite';
import { resolve } from 'path'; // Import the 'resolve' function from Node.js

export default defineConfig({
    // ... other config options ...
    // Configure the server to handle custom routes
    server: {
        proxy: {
            // You can define proxy rules for specific routes if needed
            '/signup': {
                target: resolve(__dirname, './signup/index.html'), // Use 'resolve' to get the absolute path
                changeOrigin: true,
            },
        },
    },
});