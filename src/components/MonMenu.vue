<template>
  <ul class="shadow-button-set">
    <li><router-link to="/" exact-active-class="active-link">Accueil</router-link></li>
    <li><router-link to="/cv" exact-active-class="active-link">A Propos</router-link></li>
    <li><router-link to="/projets" exact-active-class="active-link">Projets</router-link></li>
    <li><router-link to="/contact" exact-active-class="active-link">contact</router-link></li>
  </ul>
</template>

<script>
export default {
  name: 'MonMenu',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@400;600&display=swap');

.shadow-button-set {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2vmin;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000; /* On s'assure qu'il est bien devant */
}

.shadow-button-set > li {
  display: inline-flex;
}

.shadow-button-set > li > a {
  font-family: 'Trispace', sans-serif;
  font-size: 3vmin;
  text-decoration: none;
  color: rgb(255, 255, 255);
  padding: 0.5rem 1rem;
  pointer-events: auto; /* Force la cliquabilité */
}

.shadow-button-set > li > a.router-link-active {
  font-weight: bold;
  font-size: 3.5vmin;
  color: rgb(255, 0, 0);
}

/* --- AJOUT POUR LE MODE PORTRAIT (MOBILE) --- */
@media (max-width: 768px) {
  .shadow-button-set {
    top: 10px;
    right: 10px;
    gap: 10px; /* Espace fixe plutôt que vmin pour être plus stable */
  }

  .shadow-button-set > li > a {
    font-size: 16px; /* Taille fixe lisible sur mobile */
    padding: 10px 5px; /* Zone de clic plus grande */
  }

  .shadow-button-set > li > a.router-link-active {
    font-size: 18px;
  }
}
</style>