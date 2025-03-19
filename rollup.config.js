import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/potatoid.ts',
  output: [
    { file: 'dist/potato.js', format: 'es' },
    { file: 'dist/potatoid.min.js', format: 'es', plugins: [terser()] }
  ],
  plugins: [typescript()]
};
