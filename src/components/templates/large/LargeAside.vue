<script setup>
import LogoTitle from '@/components/templates/LogoTitle.vue';
</script>
<template>
  <div class="logo_and_menu">
    <logo-title class="mb-2" />
    <div class="divider" />
    <div class="menu">
      <router-link to="/">
        <i class="icon mdi mdi-home-outline" /> Home
      </router-link>
      <router-link to="/login">
        <i class="icon mdi mdi-account" /> Login
      </router-link>
    </div>
    <div class="divider"/>
    <div class="menu">
      <router-link to="/perfil">
        <i class="icon mdi mdi-account-circle-outline" /> Perfil
      </router-link>
      <router-link to="/productadd">
        <i class="icon mdi mdi-cart-outline" /> Carrinho
      </router-link>
      <router-link to="/acessorios">
        <i class="icon mdi mdi-tools" /> Acessorios
      </router-link>
      <router-link to="/categorias">
        <i class="icon mdi mdi-car-pickup" /> Categorias
      </router-link>
        <router-link to="/cor">
        <i class="icon mdi mdi-brush" /> Cores
      </router-link>
        <router-link to="/Marcas">
        <i class="icon mdi mdi-wikipedia" /> Marcas
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.mb-2 {
  margin-bottom: 1.5rem;
}

.icon {
  font-size: 2rem;
  align-self: center;
}

.divider {
  margin-top: 1rem;
  border-top: 1px solid #eeeeee;
}

.menu {
  padding: 3rem;
}

.menu a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000000;
  gap: 1rem;
  font-size: 1.3rem;
  margin-top: 2.2rem;
}
</style>