# Interactive Lines Grid Component Guide

## Component Files Location

All component files are located in: `/Users/anibalin/Desktop/dots/`

### Available Files:

1. **React Component**
   - File: `InteractiveLinesGrid.jsx`
   - Path: `/Users/anibalin/Desktop/dots/InteractiveLinesGrid.jsx`

2. **Vanilla JavaScript Class**
   - File: `InteractiveLinesGrid.js`
   - Path: `/Users/anibalin/Desktop/dots/InteractiveLinesGrid.js`

3. **Vue Component**
   - File: `InteractiveLinesGrid.vue`
   - Path: `/Users/anibalin/Desktop/dots/InteractiveLinesGrid.vue`

4. **Documentation**
   - File: `README.md`
   - Path: `/Users/anibalin/Desktop/dots/README.md`

5. **Examples**
   - Demo: `index.html` - `/Users/anibalin/Desktop/dots/index.html`
   - Multiple Examples: `example.html` - `/Users/anibalin/Desktop/dots/example.html`

## Quick Start Instructions

### For Vanilla JavaScript Projects:

1. Copy the file `/Users/anibalin/Desktop/dots/InteractiveLinesGrid.js` to your project
2. Include it in your HTML:
   ```html
   <script src="path/to/InteractiveLinesGrid.js"></script>
   ```
3. Create a container and initialize:
   ```javascript
   const grid = new InteractiveLinesGrid('#my-container', {
     cols: 25,
     rows: 8,
     color: '#666',
     hoverColor: '#fff'
   });
   ```

### For React Projects:

1. Copy the file `/Users/anibalin/Desktop/dots/InteractiveLinesGrid.jsx` to your components folder
2. Import and use:
   ```jsx
   import InteractiveLinesGrid from './components/InteractiveLinesGrid';
   
   function App() {
     return <InteractiveLinesGrid cols={30} rows={10} />;
   }
   ```

### For Vue Projects:

1. Copy the file `/Users/anibalin/Desktop/dots/InteractiveLinesGrid.vue` to your components folder
2. Import and register:
   ```vue
   <template>
     <InteractiveLinesGrid :cols="30" :rows="10" />
   </template>
   
   <script>
   import InteractiveLinesGrid from './components/InteractiveLinesGrid.vue';
   
   export default {
     components: { InteractiveLinesGrid }
   };
   </script>
   ```

## Testing Locally

To see the components in action:

1. Navigate to the directory:
   ```bash
   cd /Users/anibalin/Desktop/dots/
   ```

2. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open in browser:
   - Basic demo: http://localhost:8000/index.html
   - Multiple examples: http://localhost:8000/example.html

## Customization Options

All components support these options:

- `cols` - Number of columns (default: 25)
- `rows` - Number of rows (default: 8)
- `lineLength` - Line length in pixels (default: 20)
- `lineWidth` - Line stroke width (default: 1.5)
- `color` - Default line color (default: '#666')
- `hoverColor` - Line color on hover (default: '#fff')
- `backgroundColor` - Container background (default: '#0a0a0a')
- `showDot` - Show mouse follower (default: true)
- `dotSize` - Mouse dot size (default: 9)
- `width` - Component width (default: '100%')
- `height` - Component height in pixels (default: 240)

## File Structure Summary

```
/Users/anibalin/Desktop/dots/
├── InteractiveLinesGrid.js      # Vanilla JavaScript class
├── InteractiveLinesGrid.jsx     # React component
├── InteractiveLinesGrid.vue     # Vue component
├── README.md                    # Full documentation
├── COMPONENT_GUIDE.md          # This file
├── index.html                  # Basic demo
└── example.html               # Multiple configuration examples
```