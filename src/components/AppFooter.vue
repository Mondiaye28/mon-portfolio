<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

  <footer class="footer">
    <p>&copy; 2025 Mohamed Ndiaye. Tous droits réservés.</p>
    <!-- Icônes des réseaux sociaux -->
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/mohamed-ndiaye-74a403309?" target="_blank" aria-label="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/votreprofil" target="_blank" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="mailto:mohamedndiaye434@gmail.com?subject=Demande%20d'information&body=Bonjour,%0A%0AJe%20souhaitais%20avoir%20plus%20d'informations%20sur%20votre%20travail.%0A%0ACordialement." target="_blank" aria-label="Gmail">
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
  position: fixed; /* Fixé en bas de la fenêtre */
  bottom: 10px; /* Distance par rapport au bas */
  left: 0; /* Aligné à gauche */
  right: 0; /* Aligné à droite */
  margin: 0;
  padding: 0;
  font-size: 12px; /* Taille réduite du texte */
  color: rgb(255, 0, 0); /* Texte blanc */
  font-family: 'Trispace', sans-serif; /* Police cohérente avec le projet */
  display: flex;
  justify-content: space-between; /* Espace entre le texte et les icônes */
  align-items: center; /* Centrage vertical du contenu */
  padding: 0 20px; /* Ajoute un peu d'espace de chaque côté */
}

.social-icons {
  display: flex;
  gap: 20px; /* Espacement entre les icônes */
}

.social-icons a {
  color: white; /* Icônes blanches */
  font-size: 20px; /* Taille des icônes */
  text-decoration: none; /* Enlever le soulignement */
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ddd; /* Couleur au survol des icônes */
}
</style>
