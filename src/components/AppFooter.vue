<template>
  <footer class="footer">
    <p class="copyright">&copy; 2025 Mohamed Ndiaye. Tous droits réservés.</p>
    
    <!-- Icônes des réseaux sociaux -->
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/mohamed-ndiaye-74a403309?" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/votreprofil" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="mailto:mohamedndiaye434@gmail.com?subject=Demande%20d'information" target="_blank" aria-label="Gmail">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  mounted() {
    // Injection de FontAwesome uniquement si nécessaire
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
      document.head.appendChild(link);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@400;600&display=swap');

/* --- STYLE PC (Identique à ton code original) --- */
.footer {
  position: fixed;
  bottom: 10px; /* Flotte à 10px du bas */
  left: 0;
  right: 0;
  margin: 0;
  padding: 0 20px;
  font-size: 12px;
  color: rgb(255, 0, 0);
  font-family: 'Trispace', sans-serif;
  display: flex;
  justify-content: space-between; /* Espace max entre texte et icônes */
  align-items: center;
  z-index: 100;
  background: transparent; /* Fond transparent sur PC */
}

.copyright {
  margin: 0;
  font-weight: 600;
}

.social-icons {
  display: flex;
  gap: 20px;
}

.social-icons a {
  color: white;
  font-size: 20px;
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
}

.social-icons a:hover {
  color: #ddd;
}

/* --- RESPONSIVE MOBILE (S'active sur téléphone) --- */
@media (max-width: 768px) {
  .footer {
    bottom: 0; /* Collé au bas */
    padding: 15px;
    background-color: #000; /* Fond NOIR pour lisibilité sur mobile */
    flex-direction: column; /* Empile les éléments */
    gap: 15px;
    height: auto; /* Hauteur automatique */
    border-top: 1px solid #333;
  }

  .copyright {
    order: 2; /* Le texte passe en dessous */
    text-align: center;
    font-size: 11px;
  }

  .social-icons {
    order: 1; /* Les icônes passent au-dessus */
    gap: 30px; /* Plus d'espace pour cliquer */
  }

  .social-icons a {
    font-size: 24px; /* Icônes plus grosses */
  }
}
</style>