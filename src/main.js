import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importation du router.js

createApp(App)
  .use(router)  // Utilisation du router
  .mount('#app');  // Montage de l'application
