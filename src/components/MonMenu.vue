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
  display: flex; /* Aligne les éléments sur une ligne */
  flex-direction: row; /* Place les éléments horizontalement */
  justify-content: flex-end; /* Aligne les boutons à droite */
  gap: 2vmin; /* Augmente légèrement l'espacement entre les boutons */
  position: absolute; /* Permet de positionner le menu où on le souhaite */
  top: 20px; /* Ajoute plus d'espace en haut */
  right: 20px; /* Espace sur la droite */
}

.shadow-button-set > li {
  display: inline-flex;

}

/* Styles des liens sans bordure et avec texte blanc */
.shadow-button-set > li > a {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: 'Trispace', sans-serif; /* Police Trispace appliquée */
  outline: none;
  font-size: 3vmin; /* Taille des liens */
  border: none; /* Enlève la bordure autour des liens */
  background: none; /* Enlève le fond des liens */
  text-decoration: none; /* Supprime le soulignement des liens */
  color: rgb(255, 255, 255); /* Texte blanc */
  display: inline-block; /* Nécessaire pour les dimensions */
  padding: 0.5rem 1rem; /* Ajout d'un espacement interne */
  transition: none; /* Désactive les transitions */
}

/* État de survol et focus : changement de fond */


/* Style pour l'onglet actif : agrandissement et texte en gras */
.shadow-button-set > li > a.router-link-active {
  font-weight: bold; /* Texte en gras */
  font-size: 3.5vmin; /* Agrandissement de l'onglet actif */
  color: rgb(255, 0, 0); /* Couleur différente pour l'onglet actif */
}

/* Enlève l'effet de focus autour du lien */
.shadow-button-set > li > a:focus {
  outline: none; /* Supprime l'effet de bordure au focus */
}
</style>
