class InteractiveLinesGrid {
  constructor(container, options = {}) {
    // Default options
    this.options = {
      cols: 25,
      rows: 8,
      lineLength: 20,
      lineWidth: 1.5,
      color: '#666',
      hoverColor: '#fff',
      backgroundColor: '#0a0a0a',
      showDot: true,
      dotSize: 9,
      ...options
    };

    // Setup container
    this.container = typeof container === 'string' 
      ? document.querySelector(container) 
      : container;

    if (!this.container) {
      throw new Error('Container element not found');
    }

    // Initialize properties
    this.mouseX = 0;
    this.mouseY = 0;
    this.isMouseOver = false;
    this.animationId = null;

    // Create elements
    this.createElements();
    this.setupEventListeners();
    this.resize();
    this.animate();
  }

  createElements() {
    // Clear container
    this.container.innerHTML = '';

    // Set container styles
    Object.assign(this.container.style, {
      position: 'relative',
      backgroundColor: this.options.backgroundColor,
      cursor: 'pointer',
      overflow: 'hidden'
    });

    // Create canvas
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    Object.assign(this.canvas.style, {
      display: 'block',
      margin: '0',
      padding: '0',
      border: '0'
    });

    // Create mouse dot
    if (this.options.showDot) {
      this.mouseDot = document.createElement('div');
      Object.assign(this.mouseDot.style, {
        position: 'absolute',
        width: `${this.options.dotSize}px`,
        height: `${this.options.dotSize}px`,
        borderRadius: '50%',
        backgroundColor: this.options.hoverColor,
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.3s',
        pointerEvents: 'none',
        opacity: '0'
      });
      this.container.appendChild(this.mouseDot);
    }

    this.container.appendChild(this.canvas);
  }

  setupEventListeners() {
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.container.addEventListener('mouseenter', this.handleMouseEnter);
    this.container.addEventListener('mouseleave', this.handleMouseLeave);
    this.container.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('resize', this.handleResize);
  }

  handleMouseEnter(e) {
    this.isMouseOver = true;
    if (this.mouseDot) {
      this.mouseDot.style.opacity = '1';
    }
    this.updateMousePosition(e);
  }

  handleMouseLeave() {
    this.isMouseOver = false;
    if (this.mouseDot) {
      this.mouseDot.style.opacity = '0';
    }
  }

  handleMouseMove(e) {
    this.updateMousePosition(e);
  }

  handleResize() {
    this.resize();
  }

  updateMousePosition(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouseX = e.clientX - rect.left;
    this.mouseY = e.clientY - rect.top;

    if (this.mouseDot) {
      this.mouseDot.style.left = `${this.mouseX}px`;
      this.mouseDot.style.top = `${this.mouseY}px`;
    }
  }

  resize() {
    const rect = this.container.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  getAngleToMouse(x, y) {
    const dx = this.mouseX - x;
    const dy = this.mouseY - y;
    return Math.atan2(dy, dx);
  }

  getDistanceToMouse(x, y) {
    const dx = this.mouseX - x;
    const dy = this.mouseY - y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  drawLines() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const cellWidth = this.canvas.width / this.options.cols;
    const cellHeight = this.canvas.height / this.options.rows;

    for (let row = 0; row < this.options.rows; row++) {
      for (let col = 0; col < this.options.cols; col++) {
        const x = col * cellWidth + cellWidth / 2;
        const y = row * cellHeight + cellHeight / 2;

        let angle = -Math.PI / 2; // Default pointing up
        let opacity = 0.3;

        if (this.isMouseOver) {
          angle = this.getAngleToMouse(x, y);
          const distance = this.getDistanceToMouse(x, y);
          const maxDistance = Math.min(this.canvas.width, this.canvas.height) / 2;
          opacity = Math.max(0.3, 1 - (distance / maxDistance));
        }

        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(angle);

        this.ctx.beginPath();
        this.ctx.moveTo(0, -this.options.lineLength / 2);
        this.ctx.lineTo(0, this.options.lineLength / 2);

        this.ctx.strokeStyle = this.isMouseOver ? this.options.hoverColor : this.options.color;
        this.ctx.globalAlpha = opacity;
        this.ctx.lineWidth = this.options.lineWidth;
        this.ctx.stroke();

        this.ctx.restore();
      }
    }
  }

  animate() {
    this.drawLines();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  updateOptions(newOptions) {
    this.options = { ...this.options, ...newOptions };
    
    // Update container background if changed
    if (newOptions.backgroundColor) {
      this.container.style.backgroundColor = newOptions.backgroundColor;
    }

    // Update mouse dot if relevant options changed
    if (this.mouseDot && (newOptions.dotSize || newOptions.hoverColor)) {
      if (newOptions.dotSize) {
        this.mouseDot.style.width = `${newOptions.dotSize}px`;
        this.mouseDot.style.height = `${newOptions.dotSize}px`;
      }
      if (newOptions.hoverColor) {
        this.mouseDot.style.backgroundColor = newOptions.hoverColor;
      }
    }
  }

  destroy() {
    // Remove event listeners
    this.container.removeEventListener('mouseenter', this.handleMouseEnter);
    this.container.removeEventListener('mouseleave', this.handleMouseLeave);
    this.container.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('resize', this.handleResize);

    // Cancel animation
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    // Clear container
    this.container.innerHTML = '';
  }
}

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = InteractiveLinesGrid;
} else if (typeof define === 'function' && define.amd) {
  define([], function() { return InteractiveLinesGrid; });
} else {
  window.InteractiveLinesGrid = InteractiveLinesGrid;
}