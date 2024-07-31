import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '../views/LoginComponent.vue';
import DashboardComponent from '@/views/DashboardComponent.vue';
import InvoiceComponent from '@/views/InvoiceComponent.vue';

const routes = [
  { path: '/', name: 'Login', component: LoginComponent },
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent },
  { path: '/invoices', name: 'Invoices', component: InvoiceComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
