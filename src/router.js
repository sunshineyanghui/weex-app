import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import News from '@/views/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'News',
      component: News
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
