<template>
  <section class="cv-section">
    <h1 class="cv-title">A Propos de moi</h1>
    <div class="cv-container">
      <div class="cv-image">
        <img src="./../assets/photocv1.jpg" alt="Photo de Mohamed Ndiaye" />
      </div>
      <div class="cv-content">
        <p>Bienvenue sur mon Portfolio !</p>
        <p>
          Je suis Mohamed Ndiaye, passionné par le développement web dans son ensemble
          et pour l’instant plus orienté sur le front-end. 
        </p>
        <br>
        <p>
          Je suis actuellement étudiant en troisième année du BUT MMI (Métiers du
          Multimédia et de l’Internet) à L'IUT Sénart-Fontaineblau.
        </p>
        <br>
        
        <p>
          Dans ce portfolio, vous allez pouvoir retrouver tous les projets que j’ai pu
          réaliser dans le cadre de mes études et à côté de celles-ci.
        </p>
        <div class="cv-button-container">
          <a href="/cv_alternance.pdf" target="_blank" class="cv-button" rel="noopener noreferrer">Voir mon CV</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MonCv',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@400;600&display=swap');

/* --- STYLE GÉNÉRAL (PC) --- */
.cv-section {
  color: rgb(246, 246, 246);
  padding: 160px 50px 100px 50px; 
  font-family: 'Trispace', sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
}

.cv-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 0; 
}

.cv-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1100px;
}

.cv-image img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.cv-content {
  max-width: 600px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.8;
}

.cv-button-container {
  margin-top: 30px;
  text-align: left;
}

.cv-button {
  background-color: white;
  color: black;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 25px;  
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.cv-button:hover {
  background-color: #ccc;
  transform: translateY(-3px);
}

/* --- RESPONSIVE MOBILE (< 768px) --- */
@media (max-width: 768px) {
  .cv-section {
    /* RESET TOTAL */
    display: block; /* Pas de flexbox */
    height: auto; /* Pas de hauteur fixe */
    min-height: 100vh; /* Permet le scroll */
    overflow-y: auto; /* Force le scroll si bloqué */
    
    /* PADDING MASSIF
       Top: 200px -> C'est la seule façon sûre de dégager le menu fixe
       Bottom: 250px -> Pour dégager le footer fixe
    */
    padding: 200px 20px 250px 20px;
  }

  .cv-title {
    padding-top: 0; /* On gère tout via le padding de section */
    font-size: 2rem;
    margin-bottom: 30px;
    margin-top: 0;
    text-align: center;
  }

  .cv-container {
    display: block;
  }

  .cv-image {
    text-align: center;
    margin-bottom: 30px;
  }

  .cv-image img {
    /* Image un peu plus petite pour gagner de la place */
    width: 140px; 
    height: 140px;
  }

  .cv-content {
    text-align: center;
    font-size: 1rem;
    width: 100%;
    padding: 0 10px;
  }

  .cv-button-container {
    text-align: center;
    margin-top: 40px;
  }
}
</style>