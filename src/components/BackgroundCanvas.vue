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

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // On adapte la densité de la grille (plus espacée sur mobile pour la performance)
      const isMobile = window.innerWidth < 768;
      const gridSize = isMobile ? 40 : 30; 
      const mouse = { x: null, y: null, radius: isMobile ? 100 : 150 };

      let points = [];

      class Point {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.baseX = x;
          this.baseY = y;
          this.size = 1.5;
          this.dx = 0;
          this.dy = 0;
          this.opacity = 0.5;
        }

        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
          ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
          ctx.fill();
          ctx.closePath();
        }

        update() {
          if (mouse.x === null) return;

          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - distance) / mouse.radius;
            this.dx = Math.cos(angle) * force * 15;
            this.dy = Math.sin(angle) * force * 15;
            this.opacity = Math.min(1, force + 0.2);
          } else {
            this.dx *= 0.9;
            this.dy *= 0.9;
            this.opacity = Math.max(0.2, this.opacity - 0.02);
          }

          this.x += this.dx;
          this.y += this.dy;
          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
        }
      }

      function initPoints() {
        points = [];
        const cols = Math.floor(canvas.width / gridSize);
        const rows = Math.floor(canvas.height / gridSize);
        for (let i = 0; i <= cols; i++) {
          for (let j = 0; j <= rows; j++) {
            points.push(new Point(i * gridSize, j * gridSize));
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

      // Événements Souris
      window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

      // Événements Tactiles (Pour mobile)
      window.addEventListener("touchstart", (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }, { passive: true });

      window.addEventListener("touchmove", (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }, { passive: true });

      window.addEventListener("touchend", () => {
        mouse.x = null;
        mouse.y = null;
      });

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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: #000000;
  pointer-events: none; /* Indispensable pour cliquer sur tes pages */
}
</style>