<template>
  <div class="cv-page">
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
          <br />
          <p>
            Je suis actuellement étudiant en troisième année du BUT MMI (Métiers du
            Multimédia et de l’Internet) à l'IUT Sénart-Fontainebleau.
          </p>
          <br />
          <p>
            Dans ce portfolio, vous allez pouvoir retrouver tous les projets que j’ai pu
            réaliser dans le cadre de mes études et à côté de celles-ci.
          </p>
          
          <div class="cv-button-container">
            <a href="/cv_alternance.pdf" target="_blank" class="cv-button" rel="noopener noreferrer">
              Voir mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MonCv",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Trispace:wght@400;600&display=swap");

/* ---- PAGE ---- */
.cv-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  font-family: "Trispace", sans-serif;
  color: rgb(246, 246, 246);
}

/* ---- SECTION ---- */
.cv-section {
  width: 100%;
  max-width: 1200px;
  padding: 140px 20px 80px; /* top = hauteur du header desktop */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ---- TITRE ---- */
.cv-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 50px;
  text-align: center;
}

/* ---- CONTENEUR ---- */
.cv-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 50px;
}

/* ---- IMAGE ---- */
.cv-image img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* ---- TEXTE ---- */
.cv-content {
  max-width: 600px;
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* ---- BOUTON ---- */
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
  border-radius: 25px;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s ease;
}

.cv-button:hover {
  background-color: #ccc;
  transform: translateY(-3px);
}

/* ---- MOBILE ---- */
@media (max-width: 768px) {
  .cv-section {
    padding: 190px 20px 140px; /* header mobile + menu burger */
  }

  .cv-title {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .cv-container {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .cv-image img {
    width: 170px;
    height: 170px;
  }

  .cv-content {
    text-align: center;
    font-size: 1rem;
  }

  .cv-button-container {
    text-align: center;
    margin-top: 20px;
  }
}
</style>
