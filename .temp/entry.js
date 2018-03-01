import Vue from 'vue'
import weex from 'weex-vue-render'
import router from './router';
import App from '@/index.vue';
// import mixins from './mixins'
weex.init(Vue)
/* weex initialized here, please do not move this line */
/* eslint-disable no-new */
// Vue.mixin(mixins)
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');
