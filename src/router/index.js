import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutLarge from '@/layouts/LayoutLarge.vue';
import CategoriaView from "../views/CategoriaView.vue";
import AcessorioView from "../views/AcessorioView.vue";
import CorView from "../views/CorView.vue";
import MarcaView from "../views/MarcaView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutLarge,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/produtos/adicionar',
          name: 'ProductAdd',
          component: () => import('@/views/ProductAdd.vue'),
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: "/categorias",
          name: "categorias",
          component: CategoriaView,
        },
        {
          path: "/acessorios",
          name: "acessorios",
          component: AcessorioView,
        },
        {
          path: "/cor",
          name: "cor",
          component: CorView,
        },
        {
          path: "/marcas",
          name: "marcas",
          component: MarcaView,
        },
        {
          path: "/login",
          name: "login",
          component: LoginView,
        },
        {
          path: "/logout",
          name: "logout",
          component: LogoutView,
        }
      ],
    },
  ],
});

export default router;