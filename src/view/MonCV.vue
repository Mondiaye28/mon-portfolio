
  <template>
  <section class="cv-section">
    <h1 class="cv-title">A Propos de moi</h1>
    <div class="cv-container">
      <div class="cv-image">
        <img src="./../assets/photocv1.jpg" alt="" />
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
.cv-section {
  color: rgb(246, 246, 246);             /* Garder le texte en noir */
  padding: 50px;
  font-family: 'Trispace', sans-serif;
  text-align: center;
}

.cv-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.cv-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.cv-image img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid white;
}

.cv-content {
  max-width: 600px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.8;
}

.cv-button {
  background-color: white;
  color: black;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 25px;  
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 60px; /* Augmenté pour éloigner le bouton du texte */
  text-decoration: none;
}

.cv-button-container {
  margin-top: 15px; /* Crée un espace avant le bouton */
  text-align: left; /* Centre le bouton */
}



.cv-button:hover {
  background-color: #ccc;
}



</style>
