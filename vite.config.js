import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
        build: {
            outDir: 'build',

        },
        plugins: [react()],
    };
});
