<template>
    <div>
      <HeaderComponent />
      <SidebarMenu />
      <div class="main-content">
        <h1>Dashboard</h1>
      </div>
      <LineChart />
    </div>
  </template>

  <script>
  import LineChart from '@/components/LineChart.vue';
  import HeaderComponent from '../components/HeaderComponent.vue';
  import SidebarMenu from '../components/SidebarMenu.vue';

  export default {
    components: {
      HeaderComponent,
      SidebarMenu,
        LineChart
    }
  };
  </script>

  <style scoped>
  /* Tambahkan gaya sesuai kebutuhan */
  .main-content {
    margin-left: 200px; /* Sesuaikan dengan lebar sidebar */
  }
  </style>
