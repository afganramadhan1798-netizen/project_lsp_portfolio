import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/organization/osis',
      name: 'osis-detail',
      component: () => import('../views/OrganizationDetailView.vue'),
      props: { organizationId: 1 },
    },
    {
      path: '/organization/prabu',
      name: 'prabu-detail',
      component: () => import('../views/OrganizationDetailView.vue'),
      props: { organizationId: 2 },
    },
  ],

  scrollBehavior() {
    return { top: 0 }
  },
})

export default router