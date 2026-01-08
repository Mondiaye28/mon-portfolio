<template>
  <div class="feedback-card">
    <div class="feedback-header">CONTACT</div>
    <form class="feedback-body">
      <div class="feedback-body__name-row">
        <input class="feedback-body__name" placeholder="Nom" type="text" />
        <input class="feedback-body__surname" placeholder="Prénom" type="text" />
      </div>
      <input class="feedback-body__subject" placeholder="Objet" type="text" />
      <input class="feedback-body__email" placeholder="Email" type="email" />
      <textarea class="feedback-body__message" placeholder="Message"></textarea>
      <button class="feedback-body__submit" type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MeContacter',
};
</script>

<style>
:root {
  --shadow: -0.6rem 0.6rem 0 rgba(29, 30, 28, 0.26);
}

* {
  font-family: 'Trispace', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Important pour garantir que le padding et la bordure ne dépassent pas la taille de l'élément */
}

body {
  background-color: #a2a2a2;
  display: flex;
  justify-content: center;  /* Centre horizontalement */
  align-items: center;      /* Centre verticalement */
  height: 100vh;            /* Prend toute la hauteur de la fenêtre */
  padding: 0;
  margin: 0;
}

input, button, textarea {
  border: 2px solid rgba(0, 0, 0, 0.6);
  background-image: none;
  background-color: #dadad3;
  box-shadow: none;
  padding: 10px;
  margin: 5px 0;  /* Ajoute un peu d'espace entre les éléments du formulaire */
  border-radius: 5px; /* Coins légèrement arrondis */
  font-size: 1rem;    /* Taille de police plus grande */
}

input:focus, button:focus, textarea:focus {
  outline: none;
}

textarea {
  min-height: 70px; /* Plus de hauteur par défaut */
  resize: vertical;
}

button {
  cursor: pointer;
  font-weight: 500;
  width: 100%; /* Le bouton prend toute la largeur */
  padding: 12px; /* Ajuste la taille du bouton */
}



.feedback-header {
  text-align: center;
  color: #fff;
  padding: 8px;
  font-size: 16px; /* Augmente la taille de police */
  font-weight: 700;
  border-bottom: 1px solid black;
}

.feedback-body {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.feedback-body__name-row {
  display: flex;
  justify-content: space-between;
  gap: 10px; /* Espace entre les champs Nom et Prénom */
}

.feedback-body__name, .feedback-body__surname {
  flex: 1; /* Les deux champs prennent la même largeur */
}

.feedback-body__subject {
  margin-top: 10px;
}

.feedback-body__message {
  margin-top: 10px;
}

.feedback-body__submit {
  margin-top: 20px; /* Ajout de marge pour séparer du dernier champ */
  text-align: center; /* Centre le bouton */
}
</style>
