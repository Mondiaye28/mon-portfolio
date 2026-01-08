<template>
  <div class="projects-container">
    <!-- Ligne 1 -->
    <div class="project-row first-row">
      <!-- Bloc 1 -->
      <div class="project-block" @mouseover="hover = 1" @mouseleave="hover = null">
        <img :src="require('@/assets/ego.png')" alt="Projet 1" class="project-img" />
        <div v-show="hover === 1" class="overlay">
          <p class="project-description">Voici un projet passionnant dans lequel j'ai travaillé.</p>
          <a href="/ROADZ.pdf" target="_blank" rel="noopener noreferrer">Voir en détails</a>
        </div>
      </div>

      <!-- Bloc 2 -->
      <div class="project-block" @mouseover="hover = 2" @mouseleave="hover = null">
        <img :src="require('@/assets/roadz.png')" alt="Projet 2" class="project-img" />
        <div v-show="hover === 2" class="overlay">
          <p class="project-description">Un autre projet intéressant sur lequel j'ai pu apprendre beaucoup.</p>
          <a href="/ROADZ.pdf" target="_blank" rel="noopener noreferrer">Voir en détails</a>
        </div>
      </div>
    </div>

    <!-- Ligne 2 -->
    <div class="project-row">
      <!-- Bloc 3 -->
      <div class="project-block" @mouseover="hover = 3" @mouseleave="hover = null">
        <img :src="require('@/assets/reloues.jpg')" alt="Projet 3" class="project-img" />
        <div v-show="hover === 3" class="overlay">
          <p class="project-description">Un autre projet passionnant où j'ai travaillé avec une équipe formidable.</p>
          <a href="https://mmibut1.org/2024/S1/groupe_l/accueil.php" target="_blank" rel="noopener noreferrer">Voir en détails</a>
        </div>
      </div>

      <!-- Bloc 4 -->
      <div class="project-block" @mouseover="hover = 4" @mouseleave="hover = null">
        <img :src="require('@/assets/video.png')" alt="Projet 4" class="project-img" />
        <div v-show="hover === 4" class="overlay">
          <p class="project-description">Un projet complexe mais très enrichissant.</p>
          <a href="/ROADZ.pdf" target="_blank" rel="noopener noreferrer">Voir en détails</a>
        </div>
      </div>
    </div>

    <!-- Ligne 3 -->
    <div class="project-row">
      <!-- Bloc 5 -->
      <div class="project-block" @mouseover="hover = 5" @mouseleave="hover = null">
        <img :src="require('@/assets/podcast.jpg')" alt="Projet 5" class="project-img" />
        <div v-show="hover === 5" class="overlay">
          <p class="project-description">Un projet qui m'a permis d'explorer de nouvelles technologies.</p>
          <a href="/Podcast_Dormir_Groupe_L.mp3" target="_blank" rel="noopener noreferrer">Voir en détails</a>
        </div>
      </div>

      <!-- Bloc 6 -->
      <div class="project-block" @mouseover="hover = 6" @mouseleave="hover = null">
        <img :src="require('@/assets/benevolat.png')" alt="Projet 6" class="project-img" />
        <div v-show="hover === 6" class="overlay">
          <p class="project-description">Ce projet m'a donné une expérience précieuse dans la gestion de projet.</p>
          <a href="/ROADZ.pdf" target="_blank" rel="noopener noreferrer">Voir en détails</a>
        </div>
      </div>
    </div>

    <!-- Ligne 4 : Blocs 7 et 8 -->
    <div class="project-row">
      <!-- Bloc 7 -->
      <div class="project-block" @mouseover="hover = 7" @mouseleave="hover = null">
        <img :src="require('@/assets/UPEC.svg')" alt="Projet 7 - UPEC" class="project-img" />
        <div v-show="hover === 7" class="overlay">
          <p class="project-description">Projet universitaire réalisé avec soin.</p>
          <a href="/Landing%20page%202/index.html" target="_blank" rel="noopener noreferrer">Voir en détails</a>
        </div>
      </div>

      <!-- Bloc 8 -->
      <div class="project-block" @mouseover="hover = 8" @mouseleave="hover = null">
        <img :src="require('@/assets/bkd.png')" alt="Projet 8 - BKD" class="project-img" />
        <div v-show="hover === 8" class="overlay">
          <p class="project-description">Un projet graphique que j'ai beaucoup apprécié.</p>
          <a href="/Landing%20page%202/index.html" target="_blank" rel="noopener noreferrer">Voir en détails</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: null,
    };
  },
};
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 100px;
  margin-bottom: 50px;
}

.project-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.project-block {
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #ccc;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* prend tout le bloc */
  display: block;
}

.project-block:hover {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 12px;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.project-block:hover .overlay {
  opacity: 1;
}

.project-description {
  order: 1;
  font-size: 0.9rem;
  text-align: center;
  max-width: 90%;
  margin: 0;
}

.overlay a {
  order: 2;
  display: inline-block;
  padding: 8px 16px;
  background: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
}

.overlay a:hover {
  background: #e6e6e6;
}
</style>