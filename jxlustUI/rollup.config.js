// import { terser } from "rollup-plugin-terser";
// import filesize from "rollup-plugin-filesize";

// import baseConfig from "./rollup.config.base";
import baseConfig from './package/rollup.config.vue.js';

export default {
  ...baseConfig,
  plugins: [...baseConfig.plugins],
  // plugins: [...baseConfig.plugins, terser(), filesize()],
};
