import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const HelloWorld = () => import('@pk/MyButton/index.vue');
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'my home',
      keepAlive: true,
    },
    component: HelloWorld,
    // children: [
    //   {
    //     path: 'abs',
    //     component: () => xxxx,
    //   },
    // ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  document.title = (to?.meta?.title as string) ?? document.title;
  return true;
});

export default router;
