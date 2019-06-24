import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations/mutations';
import actions from './actions/actions';
import getters from './getters/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  ...getters,
  ...state,
  ...mutations,
  ...actions
});
