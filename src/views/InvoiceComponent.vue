<template>
    <div>
      <HeaderComponent />
      <SidebarMenu />
      <div class="main-content">
        <h1>Invoices</h1>
        <table class="invoice-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="invoice in invoices" :key="invoice.id">
              <td>{{ invoice.id }}</td>
              <td>{{ invoice.date }}</td>
              <td>{{ invoice.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

  <script>
  import HeaderComponent from '../components/HeaderComponent.vue';
  import SidebarMenu from '../components/SidebarMenu.vue';
  import invoicesData from '../dummyData.json';

  export default {
    components: {
      HeaderComponent,
      SidebarMenu
    },
    data() {
      return {
        invoices: invoicesData.invoices
      };
    }
  };
  </script>

  <style scoped>
  .main-content {
    margin-left: 200px; /* Sesuaikan dengan lebar sidebar */
    padding: 20px;
  }

  h1 {
    color: #333;
    margin-bottom: 20px;
  }

  .invoice-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }

  .invoice-table th, .invoice-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  .invoice-table th {
    background-color: #f4f4f4;
    color: #333;
    font-weight: bold;
  }

  .invoice-table tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  .invoice-table tr:hover {
    background-color: #eaeaea;
  }
  </style>
