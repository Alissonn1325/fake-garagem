<script setup>
import { ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const showMenu = ref(false);

onBeforeRouteUpdate(() => {
  showMenu.value = false;
});
</script>
<template>
  <div id="footerMenu" :style="{ display: showMenu ? 'block' : 'none' }">
    <RouterLink to="/login">
      <i class="mdi mdi-account" />
      Login
    </RouterLink>
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
  <div class="icons">
    <RouterLink to="/">
      <i class="mdi mdi-home-outline" />
      Home
    </RouterLink>
    <RouterLink to="/perfil">
      <i class="mdi mdi-account-circle-outline" />
      Perfil
    </RouterLink>
    <RouterLink to="/productadd">
      <i class="mdi mdi-cart-outline" />
      Carrinho
    </RouterLink>

    <div class="hamburger" @click="showMenu = !showMenu">
      <i class="mdi mdi-menu" />
      Menu
    </div>
  </div>
</template>
<style scoped>
#footerMenu {
    position: fixed;
    bottom: 15%;
    right: 0;

    width: 100%;
    border-top: #EEEEEE 1px solid;
    background-color: white;

    display: block;
    padding: 1rem;
}

#footerMenu a {
    display: flex;
    width: 100%;

    text-decoration: none;
    color: #000000;
    font-size: 20px;
    transition: color 0.3s;
}


.icons {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

.icons a,
.icons .hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #282828;
    font-size: 1rem;
    transition: color 0.3s;
}

.hamburger:hover {
    cursor: pointer;
}
</style>