// Console script to inspect Oxide.computer section spacing
// Paste this in the browser console on https://oxide.computer/

// Function to find elements containing the text "Programmable networking"
function findSectionWithText(text) {
  const allElements = document.querySelectorAll('*');
  for (let element of allElements) {
    if (element.textContent && element.textContent.includes(text) && element.tagName !== 'SCRIPT') {
      return element;
    }
  }
  return null;
}

// Find the section
const targetText = "Programmable networking";
let targetElement = findSectionWithText(targetText);

// If not found directly, try to find by h2 or section tags
if (!targetElement) {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  for (let heading of headings) {
    if (heading.textContent.includes(targetText)) {
      targetElement = heading;
      break;
    }
  }
}

if (targetElement) {
  console.log('Found target element:', targetElement);
  
  // Get the section or parent container
  let sectionElement = targetElement.closest('section') || 
                      targetElement.closest('[class*="section"]') || 
                      targetElement.closest('div[class*="container"]') ||
                      targetElement.parentElement;
  
  console.log('Section element:', sectionElement);
  
  // Get computed styles
  const computedStyles = window.getComputedStyle(sectionElement);
  
  // Extract spacing information
  const spacingInfo = {
    paddingTop: computedStyles.paddingTop,
    paddingBottom: computedStyles.paddingBottom,
    marginTop: computedStyles.marginTop,
    marginBottom: computedStyles.marginBottom,
    height: computedStyles.height,
    element: sectionElement.tagName,
    classes: sectionElement.className
  };
  
  console.log('=== SPACING ANALYSIS ===');
  console.log('Element:', spacingInfo.element);
  console.log('Classes:', spacingInfo.classes);
  console.log('Padding Top:', spacingInfo.paddingTop);
  console.log('Padding Bottom:', spacingInfo.paddingBottom);
  console.log('Margin Top:', spacingInfo.marginTop);
  console.log('Margin Bottom:', spacingInfo.marginBottom);
  console.log('Height:', spacingInfo.height);
  
  // Check parent container spacing too
  const parentElement = sectionElement.parentElement;
  if (parentElement) {
    const parentStyles = window.getComputedStyle(parentElement);
    console.log('\n=== PARENT CONTAINER ===');
    console.log('Parent Element:', parentElement.tagName);
    console.log('Parent Classes:', parentElement.className);
    console.log('Parent Gap:', parentStyles.gap || 'none');
    console.log('Parent Padding Top:', parentStyles.paddingTop);
    console.log('Parent Padding Bottom:', parentStyles.paddingBottom);
    console.log('Parent Margin Top:', parentStyles.marginTop);
    console.log('Parent Margin Bottom:', parentStyles.marginBottom);
  }
  
  // Generate Tailwind classes based on pixel values
  console.log('\n=== SUGGESTED TAILWIND CLASSES ===');
  
  function pixelsToTailwind(px) {
    const value = parseInt(px);
    const rem = value / 16; // Assuming 16px = 1rem
    if (value === 0) return '0';
    if (value === 4) return '1';
    if (value === 8) return '2';
    if (value === 12) return '3';
    if (value === 16) return '4';
    if (value === 20) return '5';
    if (value === 24) return '6';
    if (value === 32) return '8';
    if (value === 40) return '10';
    if (value === 48) return '12';
    if (value === 64) return '16';
    if (value === 80) return '20';
    if (value === 96) return '24';
    if (value === 128) return '32';
    if (value === 160) return '40';
    if (value === 192) return '48';
    if (value === 224) return '56';
    if (value === 256) return '64';
    if (value === 320) return '80';
    return `[${value}px]`; // Custom value
  }
  
  const ptClass = `py-${pixelsToTailwind(spacingInfo.paddingTop)}`;
  const pbClass = `py-${pixelsToTailwind(spacingInfo.paddingBottom)}`;
  const mtClass = `mt-${pixelsToTailwind(spacingInfo.marginTop)}`;
  const mbClass = `mb-${pixelsToTailwind(spacingInfo.marginBottom)}`;
  
  console.log('Padding classes:', ptClass, pbClass);
  console.log('Margin classes:', mtClass, mbClass);
  
  // Return the data for easy copying
  return {
    spacing: spacingInfo,
    tailwindClasses: {
      padding: `${ptClass} ${pbClass}`.replace('py-', 'py-'),
      margin: `${mtClass} ${mbClass}`
    }
  };
  
} else {
  console.log('Element with "Programmable networking" text not found');
  console.log('Available sections:');
  const sections = document.querySelectorAll('section, [class*="section"]');
  sections.forEach((section, index) => {
    console.log(`${index + 1}:`, section.className, section.textContent.substring(0, 100) + '...');
  });
}