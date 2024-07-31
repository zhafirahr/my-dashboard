<template>
    <header class="header">
      <div class="header-content">
        <span class="profile">Profile</span>
        <button @click="logout" class="logout-button">Logout</button>
      </div>
    </header>
  </template>

  <script>
  export default {
    methods: {
      logout() {
        this.$router.push('/');
      }
    }
  };
  </script>

  <style scoped>
  .header {
    background-color: #148aff;
    color: #ecf0f1;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .header-content {
    display: flex;
    align-items: right;
  }

  .profile {
    font-size: 40px;
    margin-right: 1000px;
  }

  .logout-button {
    background-color: #e74c3c;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }

  .logout-button:hover {
    background-color: #c0392b;
  }
  </style>
