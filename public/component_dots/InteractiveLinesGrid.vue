<template>
  <div
    ref="wrapper"
    :class="className"
    :style="{
      position: 'relative',
      width: width,
      height: height + 'px',
      backgroundColor: backgroundColor,
      cursor: 'pointer',
      ...customStyle
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
  >
    <canvas
      ref="canvas"
      :style="{
        display: 'block',
        margin: 0,
        padding: 0,
        border: 0
      }"
    />
    <div
      v-if="showDot"
      :style="{
        position: 'absolute',
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        borderRadius: '50%',
        backgroundColor: hoverColor,
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.3s',
        opacity: isMouseOver ? 1 : 0,
        pointerEvents: 'none'
      }"
    />
  </div>
</template>

<script>
export default {
  name: 'InteractiveLinesGrid',
  props: {
    cols: {
      type: Number,
      default: 25
    },
    rows: {
      type: Number,
      default: 8
    },
    lineLength: {
      type: Number,
      default: 20
    },
    lineWidth: {
      type: Number,
      default: 1.5
    },
    color: {
      type: String,
      default: '#666'
    },
    hoverColor: {
      type: String,
      default: '#fff'
    },
    backgroundColor: {
      type: String,
      default: '#0a0a0a'
    },
    showDot: {
      type: Boolean,
      default: true
    },
    dotSize: {
      type: Number,
      default: 9
    },
    className: {
      type: String,
      default: ''
    },
    customStyle: {
      type: Object,
      default: () => ({})
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: Number,
      default: 240
    }
  },
  data() {
    return {
      mousePos: { x: 0, y: 0 },
      isMouseOver: false,
      animationId: null,
      ctx: null
    };
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext('2d');
    this.resizeCanvas();
    this.animate();
    window.addEventListener('resize', this.resizeCanvas);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.resizeCanvas);
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  },
  methods: {
    resizeCanvas() {
      const rect = this.$refs.wrapper.getBoundingClientRect();
      this.$refs.canvas.width = rect.width;
      this.$refs.canvas.height = rect.height;
    },
    getAngleToMouse(x, y) {
      const dx = this.mousePos.x - x;
      const dy = this.mousePos.y - y;
      return Math.atan2(dy, dx);
    },
    getDistanceToMouse(x, y) {
      const dx = this.mousePos.x - x;
      const dy = this.mousePos.y - y;
      return Math.sqrt(dx * dx + dy * dy);
    },
    drawLines() {
      const canvas = this.$refs.canvas;
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cellWidth = canvas.width / this.cols;
      const cellHeight = canvas.height / this.rows;

      for (let row = 0; row < this.rows; row++) {
        for (let col = 0; col < this.cols; col++) {
          const x = col * cellWidth + cellWidth / 2;
          const y = row * cellHeight + cellHeight / 2;

          let angle = -Math.PI / 2;
          let opacity = 0.3;

          if (this.isMouseOver) {
            angle = this.getAngleToMouse(x, y);
            const distance = this.getDistanceToMouse(x, y);
            const maxDistance = Math.min(canvas.width, canvas.height) / 2;
            opacity = Math.max(0.3, 1 - (distance / maxDistance));
          }

          this.ctx.save();
          this.ctx.translate(x, y);
          this.ctx.rotate(angle);

          this.ctx.beginPath();
          this.ctx.moveTo(0, -this.lineLength / 2);
          this.ctx.lineTo(0, this.lineLength / 2);

          this.ctx.strokeStyle = this.isMouseOver ? this.hoverColor : this.color;
          this.ctx.globalAlpha = opacity;
          this.ctx.lineWidth = this.lineWidth;
          this.ctx.stroke();

          this.ctx.restore();
        }
      }
    },
    animate() {
      this.drawLines();
      this.animationId = requestAnimationFrame(() => this.animate());
    },
    handleMouseMove(e) {
      const rect = this.$refs.wrapper.getBoundingClientRect();
      this.mousePos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    },
    handleMouseEnter(e) {
      this.isMouseOver = true;
      this.handleMouseMove(e);
    },
    handleMouseLeave() {
      this.isMouseOver = false;
    }
  }
};
</script>