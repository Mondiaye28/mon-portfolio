<template>
  <div class="projects-page-root">
    
    <div class="projects-wrapper">
      
      <!-- En-tête -->
      <div class="section-header">
        <h2 class="title">MES PROJETS</h2>
        <div class="separator"></div>
        <p class="subtitle">Glissez vers la droite <span class="arrow">→</span></p>
      </div>

      <!-- CONTAINER CARROUSEL -->
      <div class="carousel-section">
        
        <!-- BOUTON GAUCHE -->
        <button class="nav-btn prev" @click="scrollLeft" aria-label="Précédent">
          &#10094;
        </button>

        <!-- LA PISTE DE DÉFILEMENT (TRACK) -->
        <div class="carousel-track" ref="carousel">
          
          <div class="project-card" v-for="(project, index) in projects" :key="index">
            <!-- HAUT : Image -->
            <div class="card-header">
              <div class="window-controls">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <div class="img-container">
                <img :src="project.img" :alt="project.title" class="project-img" />
              </div>
            </div>

            <!-- BAS : Texte -->
            <div class="card-body">
              <div class="meta-row">
                <span class="tag">{{ project.tag }}</span>
                <span class="year">{{ project.year }}</span>
              </div>
              
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.desc }}</p>
              
              <div class="btn-container">
                <a :href="project.link" target="_blank" class="open-btn">
                  Voir
                </a>
              </div>
            </div>
          </div>

        </div>

        <!-- BOUTON DROITE -->
        <button class="nav-btn next" @click="scrollRight" aria-label="Suivant">
          &#10095;
        </button>

      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'MesProjets',
  data() {
    return {
      projects: [
        { 
          title: "Projet Ego", 
          tag: "WEB", 
          year: "2024", 
          img: require('@/assets/ego.png'), 
          desc: "Site web sur la théorie du complot. Développement Front-end avancé.", 
          link: "https://but1.mmi-iutsf.org/S2/2024/complot.2024.mmibut1.org/" 
        },
        { 
          title: "Projet Roadz", 
          tag: "COM", 
          year: "2024", 
          img: require('@/assets/roadz.png'), 
          desc: "Identité visuelle et support de communication complet.", 
          link: "/ROADZ.pdf" 
        },
        { 
          title: "Projet Reloues", 
          tag: "WEB", 
          year: "2024", 
          img: require('@/assets/reloues.jpg'), 
          desc: "Site web réalisé en équipe avec une approche collaborative.", 
          link: "https://but1.mmi-iutsf.org/S1/2024_S1/groupe_l/accueil.php" 
        },
        { 
          title: "Projet Vidéo", 
          tag: "VIDEO", 
          year: "2024", 
          img: require('@/assets/video.png'), 
          desc: "Réalisation vidéo complexe, storyboard et montage.", 
          link: "#" 
        },
        { 
          title: "Podcast", 
          tag: "AUDIO", 
          year: "2024", 
          img: require('@/assets/podcast.jpg'), 
          desc: "Narration sonore et montage audio.", 
          link: "/Podcast_Dormir_Groupe_L.mp3" 
        },
        { 
          title: "Bénévolat", 
          tag: "GESTION", 
          year: "2023", 
          img: require('@/assets/benevolat.png'), 
          desc: "Gestion de projet associatif.", 
          link: "#" 
        },
        { 
          title: "UPEC", 
          tag: "DESIGN", 
          year: "2024", 
          img: require('@/assets/UPEC.svg'), 
          desc: "Refonte pour un projet universitaire.", 
          link: "/Landing%20page%202/index.html" 
        },
        { 
          title: "BKD", 
          tag: "GRAPHISME", 
          year: "2024", 
          img: require('@/assets/bkd.png'), 
          desc: "Branding et identité visuelle.", 
          link: "/Landing%20page%202/index.html" 
        }
      ]
    };
  },
  methods: {
    scrollLeft() {
      // Défilement fixe de 350px (taille d'une carte)
      this.$refs.carousel.scrollBy({ left: -350, behavior: 'smooth' });
    },
    scrollRight() {
      this.$refs.carousel.scrollBy({ left: 350, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
/* --- MISE EN PAGE PRINCIPALE --- */
.projects-page-root {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  
  /* CALE POUR LE MENU (Fixe pour tous les écrans) */
  /* Utilisation de border-top au lieu de padding pour éviter le glissement */
  border-top: 200px solid transparent; 
  
  position: relative;
  z-index: 1;
}

.projects-wrapper {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 80px;
}

/* --- EN-TÊTE --- */
.section-header {
  margin-bottom: 40px;
  padding-left: 40px;
}
.title {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin: 0;
  text-transform: uppercase;
  line-height: 1;
}
.separator {
  width: 80px;
  height: 6px;
  background-color: rgb(255, 0, 0);
  margin-top: 10px;
  margin-bottom: 10px;
}
.subtitle {
  color: #888;
  font-size: 0.9rem;
  font-family: monospace;
}
.arrow { color: rgb(255, 0, 0); animation: bounce 1s infinite; display: inline-block; }

@keyframes bounce {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}

/* --- SECTION CARROUSEL --- */
.carousel-section {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

/* TRACK (Le conteneur qui défile) */
.carousel-track {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  padding: 20px 40px;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  width: 100%;
  
  /* Masquer la barre de défilement */
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.carousel-track::-webkit-scrollbar { 
  display: none;
}

/* BOUTONS DE NAVIGATION */
.nav-btn {
  background-color: rgba(0, 0, 0, 0.8);
  color: rgb(255, 0, 0);
  border: 1px solid rgb(255, 0, 0);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.nav-btn:hover {
  background-color: rgb(255, 0, 0);
  color: white;
  transform: scale(1.1);
}

/* --- CARTE PROJET --- */
.project-card {
  flex: 0 0 auto; /* Empêche l'écrasement */
  min-width: 350px;
  width: 350px;
  height: 450px;
  scroll-snap-align: center;
  
  display: flex;
  flex-direction: column;
  background-color: #050505;
  border: 1px solid #333;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease;
  position: relative;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: rgb(255, 0, 0);
  box-shadow: 0 10px 40px rgba(255, 0, 0, 0.15);
}

.card-header {
  height: 200px;
  background-color: #151515;
  border-bottom: 1px solid #333;
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}
.window-controls { display: flex; gap: 6px; margin-bottom: 10px; }
.dot { width: 10px; height: 10px; border-radius: 50%; opacity: 0.7; }
.red { background-color: #ff5f56; } .yellow { background-color: #ffbd2e; } .green { background-color: #27c93f; }

.img-container { flex: 1; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.project-img { max-width: 90%; max-height: 100%; object-fit: contain; filter: drop-shadow(0 4px 4px rgba(0,0,0,0.5)); }

.card-body {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.meta-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.75rem; font-weight: 800; color: #666; }
.tag { color: rgb(255, 0, 0); }

.project-title { font-size: 1.4rem; font-weight: bold; color: white; margin: 0 0 10px 0; line-height: 1.2; }
.project-desc { color: #bbb; font-size: 0.9rem; line-height: 1.5; margin-bottom: 20px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

.btn-container { margin-top: auto; }
.open-btn { display: block; width: 100%; text-align: center; padding: 10px 0; background: transparent; border: 1px solid rgb(255, 0, 0); color: rgb(255, 0, 0); font-weight: 700; text-decoration: none; border-radius: 6px; transition: all 0.3s ease; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; }
.open-btn:hover { background: rgb(255, 0, 0); color: white; box-shadow: 0 0 15px rgba(255, 0, 0, 0.4); }
</style>