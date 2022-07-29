import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from 'rollup-plugin-json';
import eslint from '@rollup/plugin-eslint';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser'; //压缩代码
// import postcss from 'rollup-plugin-postcss';//打包css
import scss from 'rollup-plugin-scss';
// import pkg from "./package.json";
const formatName = 'jxlUI';
// const extensions = ['.js', '.ts'];

export default {
  input: 'package/main.ts', // 打包入口
  external: ['lodash'], //lodash 第三方库不被整合进来
  output: [
    {
      file: './lib/bundle.esm.js',
      // format: 'cjs',
      format: 'esm',
      name: formatName,
      exports: 'auto',
    },
    {
      file: './lib/bundle.js',
      format: 'iife',
      name: formatName,
      exports: 'auto',
    },
  ],
  plugins: [
    json(),
    resolve(),
    vue({
      css: true,
      compileTemplate: true,
      // 把单文件组件中的样式，插入到html中的style标签
      // css: true,
      // 把组件转换成 render 函数
      // compileTemplate: true
      target: 'browser',
    }),
    babel({
      exclude: '**/node_modules/**',
    }),
    commonjs(),
    typescript(), // 解析TypeScript
    scss(),
  ],
};
