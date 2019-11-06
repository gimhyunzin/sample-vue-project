import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routes'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
import { DatePicker, Switch, Layout, Menu, Breadcrumb, Card, Checkbox, Cascader, Input, Form, Icon, Drawer, Avatar, Alert, Calendar, Button, AutoComplete, Badge, Dropdown, Affix, Divider } from 'ant-design-vue'

import Base from "./views/layouts/Base";
import Blank from "./views/layouts/Blank";
import Error from "./views/layouts/Error";

Vue.use(Antd);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Affix);
Vue.use(Switch);
Vue.use(Breadcrumb);
Vue.use(DatePicker);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Cascader);
Vue.use(Input);
Vue.use(Form);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Avatar);
Vue.use(Alert);
Vue.use(Calendar);
Vue.use(Button);
Vue.use(AutoComplete);
Vue.use(Badge);
Vue.use(Dropdown);
Vue.use(Divider);

Vue.component('base-layout', Base);
Vue.component('blank-layout', Blank);
Vue.component('error-layout', Error);

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
