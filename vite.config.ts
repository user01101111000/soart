import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
    ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 75 },
        webp: { quality: 80 },
        avif: { quality: 70 },
        svg: {
            plugins: [
                { name: 'removeViewBox', active: false },
                { name: 'sortAttrs' },
            ],
        },
    }),
    viteCompression({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 5000,
    }),
    ],
    server: {
        host: true
    }
})
