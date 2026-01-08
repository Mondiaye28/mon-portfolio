<template>
  <nav class="nav-container">
    <ul class="shadow-button-set">
      <li><router-link to="/" exact-active-class="active-link">Accueil</router-link></li>
      <li><router-link to="/cv" exact-active-class="active-link">A Propos</router-link></li>
      <li><router-link to="/projets" exact-active-class="active-link">Projets</router-link></li>
      <li><router-link to="/contact" exact-active-class="active-link">contact</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MonMenu',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@400;600&display=swap');

.nav-container {
  position: fixed; /* Reste en haut au scroll */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000; /* Toujours au-dessus du canvas */
  pointer-events: none; /* Laisse passer les clics vers le fond si on ne clique pas sur un lien */
  display: flex;
  justify-content: flex-end;
  background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%);
}

.shadow-button-set {
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 2vmin;
  list-style: none;
  pointer-events: auto; /* Réactive les clics sur les liens */
}

.shadow-button-set > li > a {
  font-family: 'Trispace', sans-serif;
  font-size: 16px; /* Taille fixe pour la stabilité */
  text-decoration: none;
  color: rgb(255, 255, 255);
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.shadow-button-set > li > a.router-link-active {
  font-weight: bold;
  color: rgb(255, 0, 0);
}

/* --- OPTIMISATION MOBILE --- */
@media (max-width: 768px) {
  .shadow-button-set {
    padding: 15px 10px;
    gap: 5px;
    justify-content: center; /* Centre le menu sur mobile pour éviter qu'il ne dépasse */
    width: 100%;
  }

  .shadow-button-set > li > a {
    font-size: 13px; /* Légèrement plus petit pour que tout tienne sur une ligne */
    padding: 8px 6px;
  }
}
</style>