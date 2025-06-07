// Console script to extract exact styles from Oxide's page
// Run this in the browser console on the Oxide page

// Get main container
const mainContainer = document.querySelector('.px-5.600\\:px-10');
const h2 = document.querySelector('h2');
const subtitle = document.querySelector('.600\\:text-sans-2xl');

// Get the two feature sections
const features = document.querySelectorAll('.1000\\:col-span-3');

console.log('=== MAIN LAYOUT ===');
console.log('Container styles:', {
  padding: window.getComputedStyle(mainContainer).padding,
  maxWidth: window.getComputedStyle(mainContainer).maxWidth,
  margin: window.getComputedStyle(mainContainer).margin
});

console.log('\n=== TITLE STYLES ===');
console.log('H2:', {
  fontSize: window.getComputedStyle(h2).fontSize,
  lineHeight: window.getComputedStyle(h2).lineHeight,
  fontWeight: window.getComputedStyle(h2).fontWeight,
  fontFamily: window.getComputedStyle(h2).fontFamily,
  color: window.getComputedStyle(h2).color,
  marginBottom: window.getComputedStyle(h2).marginBottom
});

console.log('\n=== SUBTITLE STYLES ===');
console.log('Subtitle:', {
  fontSize: window.getComputedStyle(subtitle).fontSize,
  lineHeight: window.getComputedStyle(subtitle).lineHeight,
  fontWeight: window.getComputedStyle(subtitle).fontWeight,
  fontFamily: window.getComputedStyle(subtitle).fontFamily,
  color: window.getComputedStyle(subtitle).color
});

console.log('\n=== ASCII ART CONTAINERS ===');
features.forEach((feature, i) => {
  const pre = feature.querySelector('pre');
  const h3 = feature.querySelector('h3');
  const p = feature.querySelector('p');
  
  console.log(`\nFeature ${i + 1}:`);
  console.log('Pre (ASCII):', {
    fontSize: window.getComputedStyle(pre).fontSize,
    lineHeight: window.getComputedStyle(pre).lineHeight,
    fontFamily: window.getComputedStyle(pre).fontFamily,
    padding: window.getComputedStyle(pre).padding,
    background: window.getComputedStyle(pre).background,
    border: window.getComputedStyle(pre).border
  });
  
  console.log('H3:', {
    fontSize: window.getComputedStyle(h3).fontSize,
    lineHeight: window.getComputedStyle(h3).lineHeight,
    fontWeight: window.getComputedStyle(h3).fontWeight,
    fontFamily: window.getComputedStyle(h3).fontFamily,
    color: window.getComputedStyle(h3).color,
    marginTop: window.getComputedStyle(h3).marginTop,
    marginBottom: window.getComputedStyle(h3).marginBottom
  });
  
  console.log('P:', {
    fontSize: window.getComputedStyle(p).fontSize,
    lineHeight: window.getComputedStyle(p).lineHeight,
    fontWeight: window.getComputedStyle(p).fontWeight,
    fontFamily: window.getComputedStyle(p).fontFamily,
    color: window.getComputedStyle(p).color
  });
});

console.log('\n=== GRID LAYOUT ===');
const gridContainer = document.querySelector('.1000\\:gap-8');
console.log('Grid:', {
  display: window.getComputedStyle(gridContainer).display,
  gridTemplateColumns: window.getComputedStyle(gridContainer).gridTemplateColumns,
  gap: window.getComputedStyle(gridContainer).gap
});

// Get background color
console.log('\n=== BACKGROUND ===');
console.log('Body background:', window.getComputedStyle(document.body).backgroundColor);

// Get exact color values
console.log('\n=== EXACT COLORS ===');
const greenSpans = document.querySelectorAll('span[style*="color:#48d597"]');
const darkGreenSpans = document.querySelectorAll('span[style*="color:#236A4C"]');
if (greenSpans.length > 0) {
  console.log('Green color:', window.getComputedStyle(greenSpans[0]).color);
}
if (darkGreenSpans.length > 0) {
  console.log('Dark green color:', window.getComputedStyle(darkGreenSpans[0]).color);
}