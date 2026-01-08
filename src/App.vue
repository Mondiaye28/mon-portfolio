<template>
  <div id="app">
    <transition name="fade">
     <MonLoader v-if="isLoading" />
    </transition>
    
    <BackgroundCanvas />
    
    <div class="app-container">
      <MonMenu /> <main class="main-content">
        <router-view />
      </main>

      <AppFooter /> </div>
  </div>
</template>

<script>
import BackgroundCanvas from "./components/BackgroundCanvas.vue";
import MonMenu from "./components/MonMenu.vue";
import AppFooter from "./components/AppFooter.vue";
import MonLoader from "./components/MonLoader.vue";

export default {
  name: "App",
  components: {
    BackgroundCanvas,
    MonMenu,
    AppFooter,
    MonLoader,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); 
  },
};
</script>

<style>
/* --- STYLES GLOBAUX (NON SCOPED) --- */
/* Important pour que le body ne crée pas de marges blanches ou de scroll bizarre */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* Empêche le balancement gauche-droite sur mobile */
  background-color: #000;
}

#app {
  font-family: 'Trispace', sans-serif;
  color: white;
}

/* --- STRUCTURE RESPONSIVE --- */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  z-index: 1; /* Pour être au dessus du canvas */
}

.main-content {
  flex: 1; /* Prend tout l'espace disponible entre le menu et le footer */
  padding: 80px 20px; /* Laisse de la place pour le menu en haut et de l'air sur les côtés */
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .main-content {
    padding: 70px 15px; /* Ajustement pour les petits écrans */
  }
}
</style>

<style scoped>
/* Effet de transition pour le loader */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>