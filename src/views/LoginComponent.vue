<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="username" placeholder="Username" required class="input-field" />
        <input v-model="password" type="password" placeholder="Password" required class="input-field" />
        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </template>

  <script>
  import usersData from '../dummyData.json'; // Import data dummy

  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        const user = usersData.users.find(u => u.username === this.username && u.password === this.password);
        if (user) {
          this.$router.push('/dashboard');
        } else {
          alert('Login failed');
        }
      }
    }
  };
  </script>

  <style scoped>
  .login-container {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h1 {
    text-align: center;
    color: #333;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .login-button {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .login-button:hover {
    background-color: #45a049;
  }
  </style>
