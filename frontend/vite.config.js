import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  esbuild: {
    loader: 'tsx', // or 'ts'
    include: /\.tsx?$/, // Ensure TypeScript files are correctly included
    exclude: [], // No exclusions here, unless you need to exclude specific files
  },
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  server: {
    hmr: {
      overlay: false, // Disable the HMR error overlay in development
    },
  },
});
