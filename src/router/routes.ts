import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      {
        path: 'category/:id',
        component: () => import('pages/CategoryPage.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('pages/ProductDetail.vue'),
      },
      {
        path: 'category/:id/product/:id',
        component: () => import('pages/ProductDetail.vue'),
      },
      { path: 'shopping', component: () => import('pages/ShoppingPage.vue') },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
