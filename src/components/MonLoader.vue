<template>
  <div class="loader-overlay">
    <p class="typewriter">{{ displayedText }}<span class="cursor">|</span></p>
  </div>
</template>

<script>
export default {
  name: "MonLoader",
  data() {
    return {
      fullText: "</hello world> !!",
      displayedText: "",
      index: 0,
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
        }
      }, 90);
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
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20000; /* On s'assure qu'il couvre absolument tout */
}

.typewriter {
  font-family: 'Trispace', sans-serif;
  font-size: 2rem;
  color: rgb(255, 0, 0); 
  white-space: nowrap; /* Empêche le retour à la ligne forcé */
  margin: 0;
  padding: 0 20px; /* Sécurité pour ne pas toucher les bords de l'écran */
}

/* Ajout d'un curseur clignotant pour l'effet terminal */
.cursor {
  display: inline-block;
  width: 10px;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* --- ADAPTATION MOBILE --- */
@media (max-width: 768px) {
  .typewriter {
    font-size: 1.2rem; /* Plus petit sur mobile pour plus de sécurité */
  }
}
</style>