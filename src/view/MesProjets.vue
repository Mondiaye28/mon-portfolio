<template>
  <div class="projets-container">
    <div class="content-wrapper">
      <!-- Partie gauche : Titre principal -->
      <div class="left-section">
        <h1 class="projets-title">
          LES MEILLEURS<br />
          PROJETS SUR<br />
          LESQUELS J'AI PU<br />
          TRAVAILLER <span>(6)</span>
        </h1>
      </div>

      <!-- Partie droite : Texte descriptif et bouton -->
      <div class="right-section">
        <p class="projets-description">
          Découvrez ici les projets qui m'ont le plus passionné. Je serais heureux de vous présenter d'autres réalisations si
          vous le souhaitez. Seriez-vous intéressé(e) ?
        </p>

        <!-- Bouton avec <router-link> -->
        <div class="projets-button">
          <router-link to="/tous-mes-projets" class="button-link">
            <em> Tous mes projets </em>
            <div class="play-icon">
              <div class="triangle"></div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MesProjets",
};
</script>

<style scoped>
/* Conteneur principal */
.projets-container {
  color: #000;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
  padding: 2rem;
  box-sizing: border-box;
}

/* Wrapper pour le contenu */
.content-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

/* Partie gauche */
.left-section {
  flex: 1;
}

.projets-title {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
  color: #ffffff;
}

.projets-title span {
  font-size: 1.5rem;
  font-weight: normal;
  color: #ffffff;
}

/* Partie droite */
.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.projets-description {
  margin: 0 0 2rem 0;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #ffffff;
}

/* Bouton */
.projets-button {
  display: flex;
  align-items: center;
}

.button-link {
  display: inline-flex;
  align-items: center;
  font-size: 1.5rem;
  font-style: italic;
  color: #ffffff;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.button-link:hover {
  transform: scale(1.05);
  color: rgb(255, 0, 0); 
}

.play-icon {
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 8px solid #ffffff;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}




</style>
