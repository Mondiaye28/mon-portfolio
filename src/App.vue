<template>
  <div id="app">
    <!-- Transition du Loader -->
    <transition name="fade">
     <MonLoader v-if="isLoading" />
    </transition>
    
    <!-- Fond animé global -->
    <BackgroundCanvas />
    
    <!-- Contenu de l'application -->
    <MonMenu /> <!-- Menu global -->
    <AppFooter /> <!-- Ajoute le footer ici -->
    <router-view /> <!-- Contenu des pages -->
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
    }, 2000); // Simulation de chargement
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@400;600&display=swap');

/* Effet de transition pour le loader */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
