import ElementPlus from "element-plus";
import CustomComponents from '../../packages/components'
// import "element-plus/dist/index.css";

import { App } from "vue";

export const setupUI = function (app: App) {
  app.use(ElementPlus);
  app.use(CustomComponents);
};
