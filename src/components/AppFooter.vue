<template>
  <footer class="footer">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <p class="copyright">&copy; 2025 Mohamed Ndiaye. Tous droits réservés.</p>
    
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/mohamed-ndiaye-74a403309?" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/votreprofil" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="mailto:mohamedndiaye434@gmail.com?subject=Demande%20d'information&body=Bonjour..." target="_blank" aria-label="Gmail">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
.footer {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  /* Par défaut sur mobile : empilé verticalement et centré */
  flex-direction: column-reverse; 
  align-items: center;
  gap: 15px;
  
  font-family: 'Trispace', sans-serif;
  color: rgb(255, 0, 0);
  background: transparent;
  z-index: 10;
}

.copyright {
  margin: 0;
  font-size: 11px;
  text-align: center;
}

.social-icons {
  display: flex;
  gap: 25px; /* Plus d'espace pour cliquer facilement sur mobile */
}

.social-icons a {
  color: white;
  font-size: 24px; /* Plus grand pour l'accessibilité mobile */
  text-decoration: none;
  transition: transform 0.3s ease;
}

.social-icons a:hover {
  transform: scale(1.1);
  color: #ff0000;
}

/* --- AJUSTEMENT ORDINATEUR --- */
@media (min-width: 768px) {
  .footer {
    position: fixed; /* Fixé seulement sur grand écran */
    bottom: 0;
    left: 0;
    flex-direction: row; /* Aligné horizontalement */
    justify-content: space-between;
    padding: 15px 40px;
  }

  .copyright {
    font-size: 12px;
  }

  .social-icons a {
    font-size: 20px;
  }
}
</style>