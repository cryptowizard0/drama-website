import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import './style/reset.css'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import './libs/rem'
Vue.config.productionTip = false


Vue.use(ElementUI, { locale });
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
