import router from './router';
import App from '@/index.vue';

/* weex initialized here, please do not move this line */
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');

