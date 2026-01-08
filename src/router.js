import { createRouter, createWebHistory } from 'vue-router';
import Home from './view/HomePage.vue';       // Chemin vers le fichier Home.vue
import Cv from './view/MonCV.vue';            // Chemin vers le fichier Cv.vue
import Projets from './view/MesProjets.vue';  // Chemin vers le fichier Projets.vue
import TousMesProjets from './view/TousMesProjets.vue'; // Nouvelle page pour afficher tous les projets
import Contact from './view/MeContacter.vue';  // Chemin vers le fichier Contact.vue

const routes = [
  { path: '/', component: Home, name: 'HomePage' },            // Accueil
  { path: '/cv', component: Cv, name: 'MonCV' },              // CV
  { path: '/projets', component: Projets, name: 'MesProjets' }, // Projets
  { path: '/tous-mes-projets', component: TousMesProjets, name: 'TousMesProjets' }, // Nouvelle route pour afficher tous les projets
  { path: '/contact', component: Contact, name: 'MeContacter' },   // Contact
];

const router = createRouter({
  history: createWebHistory(),  // Mode de navigation sans rechargement de page
  routes,                      // Routes définies ci-dessus
});

export default router;
