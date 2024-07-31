<template>
    <aside class="sidebar">
      <nav>
        <ul>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><router-link to="/invoice">Invoice</router-link></li>
        </ul>
      </nav>
    </aside>
  </template>

  <script>
  export default {
    name: 'SidebarMenu'
  };
  </script>

  <style scoped>
  .sidebar {
    width: 200px;
    background-color: #2c3e50;
    color: #ecf0f1;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }

  .sidebar nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .sidebar nav ul li {
    margin: 10px 0;
  }

  .sidebar nav ul li a {
    color: #ecf0f1;
    text-decoration: none;
    padding: 10px;
    display: block;
    border-radius: 4px;
  }

  .sidebar nav ul li a:hover {
    background-color: #34495e;
    color: #ffffff;
  }
  </style>

