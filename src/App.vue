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
/* --- STYLES GLOBAUX --- */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  /* Force le noir total partout */
  background-color: #000000 !important; 
  overflow-x: hidden;
}

#app {
  font-family: 'Trispace', sans-serif;
  color: white;
  background-color: #000000; /* Assure que le fond reste noir sous le contenu */
  min-height: 100vh;
}

/* --- STRUCTURE RESPONSIVE --- */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  /* On s'assure que le container n'a pas de fond gris */
  background: transparent; 
}

.main-content {
  flex: 1;
  /* On augmente le padding pour mobile pour éviter les collisions avec le menu */
  padding: 100px 20px 40px 20px; 
  box-sizing: border-box;
  width: 100%;
}

@media (max-width: 768px) {
  .main-content {
    padding: 80px 10px 20px 10px;
  }
}
</style>