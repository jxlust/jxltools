// src/index.ts
import { App } from 'vue';
import MyButton from './MyButton/index';
import Version from "../package.json";
import "./MyButton/index.scss";

const components = [MyButton];
// 定义 install 函数类型
declare type PluginInstallFunction = (app: App, ...options: any[]) => any;

const install: PluginInstallFunction = (app: App) => {
  // 循环导入组件
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
// if (typeof window !== "undefined" && window.Vue) {
//   install(window.Vue);
// }
const version = Version.version;
export { MyButton, install };
// 导出
export default {
  version,
  MyButton,
  install,
};
