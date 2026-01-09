<template>
  <div class="loader-overlay">
    <!-- J'ai ajouté un span 'cursor' pour l'effet clignotant -->
    <p class="typewriter">{{ displayedText }}<span class="cursor">|</span></p>
  </div>
</template>

<script>
export default {
  name: "MonLoader",
  data() {
    return {
      fullText: "</hello world> !!", // Texte complet à afficher
      displayedText: "", // Texte affiché progressivement
      index: 0, // Position du caractère courant
    };
  },
  mounted() {
    this.typeWriterEffect();
  },
  methods: {
    typeWriterEffect() {
      const interval = setInterval(() => {
        if (this.index < this.fullText.length) {
          this.displayedText += this.fullText[this.index];
          this.index++;
        } else {
          clearInterval(interval);
          // Optionnel: Émettre un événement quand l'anim est finie
          // this.$emit('loader-finished');
        }
      }, 90); // vitesse de frappe (100ms par caractère)
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Trispace:wght@400;600&display=swap');

.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000; /* fond noir */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px; /* Marge de sécurité pour ne pas coller aux bords */
  box-sizing: border-box;
}

.typewriter {
  font-family: 'Trispace', sans-serif;
  font-size: 2.5rem; /* Un peu plus grand sur PC pour l'impact */
  color: rgb(255, 0, 0); 
  white-space: nowrap; /* Empêche le texte de se casser sur 2 lignes */
  font-weight: 600;
  text-align: center;
}

/* Petit curseur qui clignote pour faire plus "codeur" */
.cursor {
  color: white;
  animation: blink 1s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* --- RESPONSIVE MOBILE --- */

/* Pour les tablettes et petits laptops */
@media (max-width: 1024px) {
  .typewriter {
    font-size: 2rem;
  }
}

/* Pour les mobiles (iPhone, Android standard) */
@media (max-width: 768px) {
  .typewriter {
    font-size: 1.5rem; /* Taille réduite pour tenir sur l'écran */
  }
}

/* Pour les très petits écrans (anciens iPhone SE, Galaxy Fold plié) */
@media (max-width: 400px) {
  .typewriter {
    font-size: 1.2rem;
    white-space: normal; /* Autorise le retour à la ligne si vraiment nécessaire */
    word-break: break-word;
  }
}
</style>