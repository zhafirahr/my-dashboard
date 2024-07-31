<template>
    <div>
      <HeaderComponent />
      <SidebarMenu />
      <main>
        <router-view></router-view>
      </main>
    </div>
  </template>

  <script>
  import HeaderComponent from './HeaderComponent.vue';
  import SidebarMenu from './SidebarMenu.vue';

  export default {
    components: {
      HeaderComponent,
      SidebarMenu
    }
  };
  </script>
