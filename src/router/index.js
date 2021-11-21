import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Gallery from '../views/Gallery.vue';
import Services from '../views/Services.vue';
import OurDoctors from '../views/OurDoctors.vue';
import Contacts from '../views/Contacts.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/our-doctors',
    name: 'OurDoctors',
    component: OurDoctors,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
