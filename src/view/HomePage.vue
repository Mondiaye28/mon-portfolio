<template>
  <div class="homepage">
    <!-- Couche des icônes flottantes -->


    <!-- Contenu principal -->
    <div class="content">
      <h1 class="title">Bienvenue</h1>
      <p class="subtitle">Graphiste & Développeur Front-End</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@400;600&display=swap');

body {
  margin: 0;
  font-family: 'Trispace', sans-serif;
}

/* Couche générale */
.homepage {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 3rem;
  color: white;
  background-size: cover;
  overflow: hidden; /* empêche les icônes de sortir de l'écran */
}

/* Contenu principal */
.content {
  position: relative;
  z-index: 2;
  text-align: left;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 0.5rem;
}



</style>
