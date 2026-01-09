<template>
  <div class="loader-overlay">
    <p class="typewriter">{{ displayedText }}</p>
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
}

.typewriter {
  font-family: 'Trispace', sans-serif;
  font-size: 2rem;
  color: rgb(255, 0, 0); 
  white-space: pre; /* garde les espaces et retour ligne */
}
</style>
