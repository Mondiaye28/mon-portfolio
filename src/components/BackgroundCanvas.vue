<template>
  <canvas ref="backgroundCanvas" class="background-canvas"></canvas>
</template>

<script>
export default {
  name: "BackgroundCanvas",
  mounted() {
    this.initBackground();
  },
  methods: {
    initBackground() {
      const canvas = this.$refs.backgroundCanvas;
      const ctx = canvas.getContext("2d");

      // Ajuste la taille du canvas pour qu'il prenne toute la largeur et la hauteur de la fenêtre
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const gridSize = 30; // Taille de la grille de points
      const mouse = { x: null, y: null, radius: 150 }; // Influence de la souris

      let points = [];

      // Création des points formant un quadrillage
      class Point {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.baseX = x;
          this.baseY = y;
          this.size = 1.5; // Taille des points (réduit à 2px)
          this.dx = 0;
          this.dy = 0;
          this.opacity = 0.5; // Opacité initiale faible
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`; // Couleur des points (blanc avec opacité variable)
          ctx.fill();
          ctx.closePath();
        }

        update() {
          // Si la souris n'est pas sur l'écran (ex: mobile relâché), pas d'interaction
          if (mouse.x === null || mouse.y === null) {
            this.dx *= 0.9;
            this.dy *= 0.9;
            this.opacity = Math.max(0.2, this.opacity - 0.02);
            this.x += (this.baseX - this.x) * 0.05;
            this.y += (this.baseY - this.y) * 0.05;
            return;
          }

          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - distance) / mouse.radius;
            this.dx = Math.cos(angle) * force * 15; // Intensité de l'effet de déplacement
            this.dy = Math.sin(angle) * force * 15;
            this.opacity = Math.min(1, force); // L'opacity augmente à mesure que la souris se rapproche
          } else {
            this.dx *= 0.9; // Atténuation du déplacement lorsque la souris s'éloigne
            this.dy *= 0.9;
            this.opacity = Math.max(0.2, this.opacity - 0.02); // Réduit l'opacité à mesure que la souris s'éloigne (minimum 0.2)
          }

          this.x += this.dx;
          this.y += this.dy;

          // Retour progressif à la position initiale
          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
        }
      }

      // Initialiser les points pour créer un quadrillage
      function initPoints() {
        points = [];
        const cols = Math.floor(canvas.width / gridSize);
        const rows = Math.floor(canvas.height / gridSize);

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const x = i * gridSize;
            const y = j * gridSize;
            points.push(new Point(x, y));
          }
        }
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        points.forEach((point) => {
          point.update();
          point.draw();
        });

        requestAnimationFrame(animate);
      }

      // --- GESTION ÉVÉNEMENTS ---

      // 1. Souris (PC)
      window.addEventListener("mousemove", (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
      });

      // 2. Tactile (Mobile/Tablette)
      // L'option { passive: true } permet au navigateur de continuer à scroller
      // tout en nous envoyant les coordonnées du doigt. C'est crucial pour que
      // l'animation suive le doigt pendant le défilement.
      const handleTouch = (event) => {
        if (event.touches.length > 0) {
          mouse.x = event.touches[0].clientX;
          mouse.y = event.touches[0].clientY;
        }
      };

      window.addEventListener("touchstart", handleTouch, { passive: true });
      window.addEventListener("touchmove", handleTouch, { passive: true });

      // touchend : quand on lève le doigt
      window.addEventListener("touchend", () => {
        mouse.x = null;
        mouse.y = null;
      });

      // Redimensionnement
      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initPoints();
      });

      initPoints();
      animate();
    },
  },
};
</script>

<style scoped>
.background-canvas {
  position: fixed; /* L'assure que le canvas reste en place, même lors du scroll */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Le fond doit être derrière le contenu */
  background-color: #000000; /* Fond noir ou toute autre couleur de fond */
}
</style>