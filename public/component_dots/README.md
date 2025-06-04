# Interactive Lines Grid Component

A customizable interactive canvas component that creates a grid of lines that dynamically point towards the mouse cursor. Available in React, Vue, and vanilla JavaScript.

## Demo

Open `index.html` in a browser to see the effect in action.

## Installation

### Vanilla JavaScript
```html
<script src="InteractiveLinesGrid.js"></script>
```

### React
```bash
npm install react
```

### Vue
```bash
npm install vue
```

## Usage

### Vanilla JavaScript
```javascript
// Create by selector
const grid = new InteractiveLinesGrid('#myContainer', {
  cols: 30,
  rows: 10,
  color: '#888',
  hoverColor: '#fff'
});

// Create by element
const container = document.getElementById('myContainer');
const grid = new InteractiveLinesGrid(container, options);

// Update options
grid.updateOptions({ color: '#ff0000' });

// Destroy when done
grid.destroy();
```

### React
```jsx
import InteractiveLinesGrid from './InteractiveLinesGrid';

function App() {
  return (
    <InteractiveLinesGrid
      cols={30}
      rows={10}
      color="#888"
      hoverColor="#fff"
      width="100%"
      height={300}
    />
  );
}
```

### Vue
```vue
<template>
  <InteractiveLinesGrid
    :cols="30"
    :rows="10"
    color="#888"
    hover-color="#fff"
    width="100%"
    :height="300"
  />
</template>

<script>
import InteractiveLinesGrid from './InteractiveLinesGrid.vue';

export default {
  components: {
    InteractiveLinesGrid
  }
};
</script>
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `cols` | number | 25 | Number of columns in the grid |
| `rows` | number | 8 | Number of rows in the grid |
| `lineLength` | number | 20 | Length of each line in pixels |
| `lineWidth` | number | 1.5 | Width of the lines |
| `color` | string | '#666' | Default color of the lines |
| `hoverColor` | string | '#fff' | Color of the lines when hovering |
| `backgroundColor` | string | '#0a0a0a' | Background color of the container |
| `showDot` | boolean | true | Show/hide the mouse follower dot |
| `dotSize` | number | 9 | Size of the mouse follower dot |
| `width` | string | '100%' | Width of the component |
| `height` | number | 240 | Height of the component in pixels |

### Additional Props (React/Vue)
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `className` | string | '' | CSS class name for the container |
| `style` / `customStyle` | object | {} | Additional inline styles |

## Examples

### Dark Theme with Blue Lines
```javascript
new InteractiveLinesGrid('#container', {
  cols: 40,
  rows: 12,
  color: '#1a1a2e',
  hoverColor: '#0f4c75',
  backgroundColor: '#000',
  lineLength: 15
});
```

### Large Grid without Dot
```jsx
<InteractiveLinesGrid
  cols={50}
  rows={20}
  showDot={false}
  lineWidth={1}
  height={400}
/>
```

### Responsive Full Screen
```javascript
const grid = new InteractiveLinesGrid(document.body, {
  cols: Math.floor(window.innerWidth / 40),
  rows: Math.floor(window.innerHeight / 40),
  backgroundColor: 'transparent'
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT