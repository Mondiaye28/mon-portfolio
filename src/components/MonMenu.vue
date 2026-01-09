<template>
  <nav class="menu-container">
    <!-- Bouton Burger / Croix -->
    <!-- J'ai ajouté un z-index très élevé (5001) pour être sûr qu'il soit AU-DESSUS du menu (5000) -->
    <button class="hamburger" @click="toggleMenu" aria-label="Menu">
      <span :class="{ 'open': isMenuOpen }"></span>
      <span :class="{ 'open': isMenuOpen }"></span>
      <span :class="{ 'open': isMenuOpen }"></span>
    </button>

    <!-- Liste des liens (Overlay) -->
    <ul class="shadow-button-set" :class="{ 'mobile-open': isMenuOpen }">
      <li>
        <router-link to="/" exact-active-class="active-link" @click="closeMenu">
          Accueil
        </router-link>
      </li>
      <li>
        <router-link to="/cv" exact-active-class="active-link" @click="closeMenu">
          A Propos
        </router-link>
      </li>
      <li>
        <router-link to="/projets" exact-active-class="active-link" @click="closeMenu">
          Projets
        </router-link>
      </li>
      <li>
        <router-link to="/contact" exact-active-class="active-link" @click="closeMenu">
          Contact
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MonMenu',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@400;600&display=swap');

/* --- CONTENEUR PRINCIPAL --- */
.menu-container {
  /* Sur PC, on garde absolute. Sur mobile, le bouton deviendra fixed. */
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

/* --- DESIGN DESKTOP (PAR DÉFAUT) --- */
.shadow-button-set {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end; /* Aligne à droite sur PC */
  gap: 2rem;
  list-style: none;
}

.shadow-button-set > li {
  display: inline-flex;
}

.shadow-button-set > li > a {
  font-family: 'Trispace', sans-serif;
  font-size: 1.2rem;
  text-decoration: none;
  color: rgb(255, 255, 255);
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.shadow-button-set > li > a.active-link {
  font-weight: bold;
  color: rgb(255, 0, 0);
  transform: scale(1.1);
}

/* --- BOUTON BURGER --- */
.hamburger {
  display: none; /* Caché sur PC */
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 5001; /* Très important : au-dessus du menu déroulant */
}

.hamburger span {
  width: 2rem;
  height: 0.25rem;
  background: white;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
}

/* --- RESPONSIVE MOBILE --- */
@media (max-width: 768px) {
  
  /* 1. Rendre le bouton FIXE pour qu'il ne bouge pas au scroll */
  .hamburger {
    display: flex;
    position: fixed; 
    top: 20px;
    right: 20px;
  }

  /* 2. Style du Menu Plein Écran */
  .shadow-button-set {
    display: none; /* Caché par défaut */
    flex-direction: column; /* Vertical */
    
    /* CORRECTION PLACEMENT : Centrer totalement */
    justify-content: center; 
    align-items: center;
    
    position: fixed; /* Prend tout l'écran */
    top: 0;
    left: 0; /* Important pour couvrir gauche/droite */
    width: 100%;
    height: 100vh;
    
    background-color: black; /* Fond NOIR */
    gap: 3rem; /* Espace entre les liens */
    z-index: 5000; /* Juste en dessous du bouton */
    padding: 0; /* Reset du padding */
  }

  /* Affichage quand ouvert */
  .shadow-button-set.mobile-open {
    display: flex;
  }

  /* Plus gros liens sur mobile */
  .shadow-button-set > li > a {
    font-size: 2rem;
  }

  /* Animation Croix */
  .hamburger span.open:nth-child(1) {
    transform: rotate(45deg);
    background: red; /* Petit bonus visuel : la croix devient rouge */
  }
  .hamburger span.open:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }
  .hamburger span.open:nth-child(3) {
    transform: rotate(-45deg);
    background: red;
  }
}
</style>