import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';
import CategoriaView from "../views/CategoriaView.vue";
import AcessorioView from "../views/AcessorioView.vue";
import CorView from "../views/CorView.vue";
import MarcaView from "../views/MarcaView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import ProductAddVue from '@/views/ProductAdd.vue';
import PerfilViewVue from '@/views/PerfilView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/productadd',
          name: 'productadd',
          component: ProductAddVue,
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
        },
        {
          path: "/perfil",
          name: "perfil",
          component: PerfilViewVue,
        }
      ],
    },
  ],
});

export default router;