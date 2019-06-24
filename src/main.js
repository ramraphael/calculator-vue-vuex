import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  render: h => h(App),
  store
});
