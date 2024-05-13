import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: import('../views/HomeView.vue'),
      children: [
        {
          path: '/one',
          name: 'one',
          component: import('../views/OneView.vue')
        },
        {
          path: '/About',
          name: 'About',
          component: import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

export default router
