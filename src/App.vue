<template>
  <div id="app" class="mx-5 my-2">
    <b-sidebar fullheight v-model="sidebarActive">
      <b-menu class="p-4">
        <b-menu-list label="Menú">
          <b-menu-item tag="router-link" :to="{name:'home'}" label="Inicio"></b-menu-item>
          <b-menu-item tag="router-link" :to="{name:'registrar'}" label="Registrar"></b-menu-item>
        </b-menu-list>
      </b-menu>
    </b-sidebar>
    <b-button icon-left="bars" @click="sidebarActive=!sidebarActive"></b-button>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      sidebarActive: false,
    };
  },
};
</script>
<style>
</style>
