import type { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('./form/FormPage.vue'),
  },
]