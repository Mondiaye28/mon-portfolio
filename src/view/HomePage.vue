<template>
  <div class="homepage">
    <!-- Couche des icônes flottantes (place réservée) -->

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

/* --- STYLE GÉNÉRAL (PC - Identique à ton original) --- */
.homepage {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Aligné à gauche */
  padding-left: 3rem; /* Remis à 3rem comme ton original */
  color: white;
  background-size: cover;
  overflow: hidden;
  font-family: 'Trispace', sans-serif;
}

.content {
  position: relative;
  z-index: 2;
  text-align: left;
}

.title {
  font-size: 4rem; /* Remis à 4rem */
  font-weight: bold;
  margin: 0;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 0.5rem;
}

/* --- RESPONSIVE MOBILE (S'active UNIQUEMENT sous 768px) --- */
@media (max-width: 768px) {
  .homepage {
    justify-content: center; /* Sur mobile, on centre */
    padding-left: 0; /* On annule le padding gauche de 3rem */
    padding: 0 20px; /* On met une petite marge de sécurité standard */
    text-align: center;
  }

  .content {
    text-align: center; /* Force le centrage du texte */
    width: 100%;
  }

  .title {
    font-size: 3rem; /* On réduit un peu le titre pour qu'il tienne */
  }

  .subtitle {
    font-size: 1.2rem;
    margin-top: 0.8rem;
  }
}

/* --- RESPONSIVE TRÈS PETITS ÉCRANS --- */
@media (max-width: 380px) {
  .title {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
}
</style>