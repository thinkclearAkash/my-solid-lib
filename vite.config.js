import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    solidPlugin(),
    // visualizer({
    //   open: true, // This automatically opens the report in your browser after the build
    //   filename: 'bundle-analysis.html' // Specifies the file to which the report will be written
    // }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MySolidLib',
      // The filename for the generated bundle
      fileName: (format) => `my-solid-lib.${format}.js`
    },
    rollupOptions: {
      // Externalize peer dependencies
      external: ['solid-js', '@suid/material'],
      output: {
        globals: {
          'solid-js': 'Solid',
          '@suid/material': 'SuidMaterial'
        }
      }
    }
  }
});
