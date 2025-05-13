import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
    build: {
        manifest: false,
        assetsDir: ".",
        rollupOptions: {
            output: {
                entryFileNames: "[name].js"
            }
        }
    },

    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            buildDirectory: "scripts",
            refresh: false,
        }),
    ],
})
