import { App } from 'vue'
import MyButton from './index.vue';

MyButton.install = (app: App) => { // 组件本身添加一个 install 方法, 方便独立导出
  app.component(MyButton.name, MyButton)
}

export default MyButton
