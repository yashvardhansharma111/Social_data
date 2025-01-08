import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    esbuild: {
        loader: 'tsx', // or 'ts'
        include: /\.tsx?$/, // Ensure TypeScript files are correctly included
        exclude: [],
    },
    plugins: [react()],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    server: {
        hmr: {
            overlay: false,
        },
    },
});
