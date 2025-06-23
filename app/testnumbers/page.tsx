"use client";

import { useEffect, useState } from "react";

export default function TestNumbersPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style jsx global>{`
        @font-face { 
          font-family: GT America Mono;
          src: url(https://oxide.computer/fonts/GT-America-Mono-Regular-OCC.woff2) format("woff2"), url(https://oxide.computer/fonts/GT-America-Mono-Regular-OCC.woff) format("woff");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        } 
        @font-face { 
          font-family: SuisseIntl;
          src: url(https://oxide.computer/fonts/SuisseIntl-Light-WebS.woff2) format("woff2"), url(https://oxide.computer/fonts/SuisseIntl-Light-WebS.woff) format("woff");
          font-style: normal;
          font-weight: 300;
          font-display: swap;
        } 
        @font-face { 
          font-family: SuisseIntl;
          src: url(https://oxide.computer/fonts/SuisseIntl-Regular-WebS.woff2) format("woff2"), url(https://oxide.computer/fonts/SuisseIntl-Regular-WebS.woff) format("woff");
          font-style: normal;
          font-weight: 400;
          font-display: swap;
        } 
        @font-face { 
          font-family: SuisseIntl;
          src: url(https://oxide.computer/fonts/SuisseIntl-RegularItalic-WebS.woff2) format("woff2"), url(https://oxide.computer/fonts/SuisseIntl-RegularItalic-WebS.woff) format("woff");
          font-style: italic;
          font-weight: 400;
          font-display: swap;
        } 
        @font-face { 
          font-family: SuisseIntl;
          src: url(https://oxide.computer/fonts/SuisseIntl-Medium-WebS.woff2) format("woff2"), url(https://oxide.computer/fonts/SuisseIntl-Medium-WebS.woff) format("woff");
          font-style: normal;
          font-weight: 500;
          font-display: swap;
        } 

        body {  
          line-height: inherit;
          color: var(--content-default-p3);
          font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
          font-weight: 400;
          font-size: 1rem;
          letter-spacing: .03rem;
        }  

        :root {
          --base-neutral-900-rgb: 215, 216, 217;
          --base-neutral-900-p3: color(display-p3 .8431 .8471 .851);
          --base-neutral-900: rgb(var(--base-neutral-900-rgb));
          --base-neutral-800-rgb: 184, 187, 188;
          --base-neutral-800-p3: color(display-p3 .7216 .7333 .7373);
          --base-neutral-800: rgb(var(--base-neutral-800-rgb));
          --base-neutral-700-rgb: 161, 164, 165;
          --base-neutral-700-p3: color(display-p3 .6314 .6431 .6471);
          --base-neutral-700: rgb(var(--base-neutral-700-rgb));
          --base-neutral-600-rgb: 126, 131, 133;
          --base-neutral-600-p3: color(display-p3 .4941 .5137 .5216);
          --base-neutral-600: rgb(var(--base-neutral-600-rgb));
          --base-neutral-500-rgb: 91, 95, 97;
          --base-neutral-500-p3: color(display-p3 .3569 .3725 .3804);
          --base-neutral-500: rgb(var(--base-neutral-500-rgb));
          --base-neutral-400-rgb: 64, 70, 71;
          --base-neutral-400-p3: color(display-p3 .251 .2745 .2784);
          --base-neutral-400: rgb(var(--base-neutral-400-rgb));
          --base-neutral-300-rgb: 45, 51, 53;
          --base-neutral-300-p3: color(display-p3 .1765 .2 .2078);
          --base-neutral-300: rgb(var(--base-neutral-300-rgb));
          --base-neutral-200-rgb: 28, 34, 37;
          --base-neutral-200-p3: color(display-p3 .1098 .1333 .1451);
          --base-neutral-200: rgb(var(--base-neutral-200-rgb));
          --base-neutral-100-rgb: 20, 27, 29;
          --base-neutral-100-p3: color(display-p3 .0784 .1059 .1137);
          --base-neutral-100: rgb(var(--base-neutral-100-rgb));
          --base-neutral-50-rgb: 16, 22, 24;
          --base-neutral-50-p3: color(display-p3 .0627 .0863 .0941);
          --base-neutral-50: rgb(var(--base-neutral-50-rgb));
          --base-neutral-0-rgb: 8, 15, 17;
          --base-neutral-0-p3: color(display-p3 .0314 .0588 .0667);
          --base-neutral-0: rgb(var(--base-neutral-0-rgb));
          --content-raise-rgb: var(--base-neutral-900-rgb);
          --content-raise-p3: var(--base-neutral-900-p3);
          --content-raise: rgb(var(--content-raise-rgb));
          --content-default-rgb: var(--base-neutral-800-rgb);
          --content-default-p3: var(--base-neutral-800-p3);
          --content-default: rgb(var(--content-default-rgb));
          --content-secondary-rgb: var(--base-neutral-700-rgb);
          --content-secondary-p3: var(--base-neutral-700-p3);
          --content-secondary: rgb(var(--content-secondary-rgb));
          --stroke-default-rgb: var(--base-neutral-300-rgb);
          --stroke-default-p3: var(--base-neutral-300-p3);
          --stroke-default: rgb(var(--stroke-default-rgb));
          --border-radius-lg: .375rem;
        }

        body {
          --tw-aspect-h: 11;
          --tw-aspect-w: 11;
          --tw-aspect-h: 10;
          --ascii-xs-font-size: 7.5px;
          --ascii-sm-font-size: 10px;
          --ascii-md-font-size: 12px;
          --ascii-lg-font-size: 13px;
        }

        html { 
          line-height: 1.5; 
          -webkit-text-size-adjust: 100%; 
          -moz-tab-size: 4; 
          -o-tab-size: 4; 
          tab-size: 4; 
          font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji"; 
          font-feature-settings: normal; 
          font-variation-settings: normal; 
          -webkit-tap-highlight-color: transparent;
        } 

        html { 
          font-family: SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif; 
          font-weight: 400; 
          line-height: 1.5rem; 
          font-size: 1rem; 
          letter-spacing: .03rem;
        } 

        html { 
          -webkit-font-smoothing: antialiased; 
          -webkit-text-stroke: 0; 
          color: var(--content-default);
        } 

        html { 
          color: var(--content-default-p3);
        } 
      `}</style>
      
      <div>
        <div className="w-[100%] px-5 min-[600px]:px-10">
            <div className="m-auto max-w-[1200px]">
                <h2 className="text-balance textWrapStyle-[balance] m-0 text-[var(--content-raise-p3)] text-[1.5625rem] min-[600px]:text-4xl min-[1000px]:text-[3.125rem] font-normal min-[600px]:font-normal min-[1000px]:font-normal mb-6 min-[600px]:mb-10 min-[1000px]:mb-14 mt-24 min-[600px]:mt-40 text-center min-[600px]:text-left font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[600px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[1000px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-8 min-[600px]:leading-[2.625rem] min-[1000px]:leading-[110%] tracking-wide min-[600px]:tracking-normal min-[1000px]:tracking-normal">The Measure of Our Method: Lasting Success, Enduring Partnerships</h2>
            </div>
        </div>
        <div className="w-[100%] px-5 min-[600px]:px-10">
            <div className="relative z-10 m-auto mt-14 grid max-w-[1200px] grid-cols-[repeat(12,minmax(0,1fr))] gap-6 min-[600px]:gap-6 min-[1000px]:gap-8 min-[1000px]:!gap-y-[0px]">
                <div className="col-span-6 min-[1000px]:col-span-3">
                    <div className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border border-[var(--stroke-default-p3)]" style={{ backgroundColor: '#39301f', padding: '12px' }}>
                        <div className="relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)]">
                            <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                                <svg width="622" height="132" viewBox="0 0 622 132" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-full max-h-full" style={{ margin: '4px' }}>
                                  <rect width="84" height="4" fill="#ecbb5a"/>
                                  <rect y="8" width="84" height="4" fill="#ecbb5a"/>
                                  <rect y="16" width="84" height="4" fill="#ecbb5a"/>
                                  <rect x="43" width="84" height="4" fill="#ecbb5a"/>
                                  <rect x="43" y="8" width="84" height="4" fill="#ecbb5a"/>
                                  <rect x="43" y="16" width="84" height="4" fill="#ecbb5a"/>
                                  <rect y="24" width="84" height="4" fill="#ecbb5a"/>
                                  <rect y="32" width="84" height="4" fill="#ecbb5a"/>
                                  <rect y="40" width="84" height="4" fill="#ecbb5a"/>
                                  <rect y="48" width="84" height="4" fill="#ecbb5a"/>
                                  <rect x="43" y="32" width="84" height="4" fill="#ecbb5a"/>
                                  <rect x="43" y="40" width="84" height="4" fill="#ecbb5a"/>
                                  <rect x="43" y="24" width="84" height="4" fill="#ecbb5a"/>
                                  <rect y="56" width="127" height="4" fill="#ecbb5a"/>
                                  <rect y="64" width="127" height="4" fill="#ecbb5a"/>
                                  <rect y="72" width="127" height="4" fill="#ecbb5a"/>
                                  <rect y="80" width="127" height="4" fill="#ecbb5a"/>
                                  <rect y="88" width="127" height="4" fill="#ecbb5a"/>
                                  <rect y="96" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="43" y="48" width="84" height="4" fill="#ecbb5a"/>
                                  <rect y="104" width="127" height="4" fill="#ecbb5a"/>
                                  <rect y="112" width="127" height="4" fill="#ecbb5a"/>
                                  <rect y="120" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="124" y="112" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="248" y="96" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="371" y="64" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="371" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="495" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="127" y="128" width="495" height="4" fill="#ecbb5a"/>
                                  <rect x="248" y="64" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="248" y="32" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="375" y="1" width="127" height="4" transform="rotate(90 375 1)" fill="#ecbb5a"/>
                                  <rect x="498" width="132" height="3.99999" transform="rotate(90 498 0)" fill="#ecbb5a"/>
                                  <rect x="4" y="1" width="127" height="4" transform="rotate(90 4 1)" fill="#ecbb5a"/>
                                  <rect x="622" width="128" height="3.99999" transform="rotate(90 622 0)" fill="#ecbb5a"/>
                                  <rect x="128" width="128" height="3.99999" transform="rotate(90 128 0)" fill="#ecbb5a"/>
                                  <rect x="251" width="128" height="3.99999" transform="rotate(90 251 0)" fill="#ecbb5a"/>
                                  <rect x="248" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="124" y="96" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="124" y="80" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="124" y="64" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="124" y="48" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="124" y="32" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="124" y="16" width="127" height="4" fill="#ecbb5a"/>
                                  <rect x="124" width="127" height="4" fill="#ecbb5a"/>
                                  <rect y="128" width="127" height="4" fill="#ecbb5a"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-balance textWrapStyle-[balance] m-0 mb-2 text-[var(--content-raise-p3)] text-[.875rem] min-[800px]:text-base font-medium min-[800px]:font-medium font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.125rem] min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">100% Client Retention</h3>
                    <p className="m-0 mb-4 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-4 min-[800px]:leading-[1.125rem] text-[.75rem] min-[800px]:text-[.875rem] tracking-wider min-[800px]:tracking-wider">Every client who partners with us, stays with us. This reflects the lasting value and unwavering trust we build together, making your success our long-term commitment.</p>
                </div>
                <div className="col-span-6 min-[1000px]:col-span-3">
                    <div className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border border-[var(--stroke-default-p3)]" style={{ backgroundColor: '#39301f', padding: '12px' }}>
                        <div className="relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)]">
                            <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                                <img 
                                  src="/img/numbers_2.png" 
                                  alt="Number 2" 
                                  className="w-full h-auto max-w-full max-h-full"
                                  style={{ 
                                    margin: '4px',
                                    filter: 'brightness(0) saturate(100%) invert(68%) sepia(58%) saturate(385%) hue-rotate(7deg) brightness(93%) contrast(88%)'
                                  }}
                                />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-balance textWrapStyle-[balance] m-0 mb-2 text-[var(--content-raise-p3)] text-[.875rem] min-[800px]:text-base font-medium min-[800px]:font-medium font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.125rem] min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">7+ Years Average Relationship</h3>
                    <p className="m-0 mb-4 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-4 min-[800px]:leading-[1.125rem] text-[.75rem] min-[800px]:text-[.875rem] tracking-wider min-[800px]:tracking-wider">We cultivate deep, long-term partnerships, allowing us to intimately understand and evolve with your business needs for over seven years on average.</p>
                </div>
                <div className="col-span-6 min-[1000px]:col-span-3">
                    <div className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border border-[var(--stroke-default-p3)]" style={{ backgroundColor: '#39301f', padding: '12px' }}>
                        <div className="relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)]">
                            <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                                <svg width="1786" height="675" viewBox="0 0 1786 675" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-full max-h-full" style={{ margin: '4px' }}>
                                  <path d="M180.5 551.5C230.056 551.5 274.77 558.572 306.972 569.9C323.088 575.57 335.881 582.241 344.577 589.474C353.294 596.724 357.5 604.184 357.5 611.5C357.5 618.816 353.294 626.276 344.577 633.526C335.881 640.759 323.088 647.43 306.972 653.1C274.77 664.428 230.056 671.5 180.5 671.5C130.944 671.5 86.2295 664.428 54.0283 653.1C37.9121 647.43 25.119 640.759 16.4229 633.526C7.70601 626.276 3.5 618.816 3.5 611.5C3.5 604.184 7.70601 596.724 16.4229 589.474C25.119 582.241 37.9121 575.57 54.0283 569.9C86.2295 558.572 130.944 551.5 180.5 551.5Z" stroke="#ecbb5a" strokeWidth="7"/>
                                  <path d="M660.5 551.5C710.056 551.5 754.77 558.572 786.972 569.9C803.088 575.57 815.881 582.241 824.577 589.474C833.294 596.724 837.5 604.184 837.5 611.5C837.5 618.816 833.294 626.276 824.577 633.526C815.881 640.759 803.088 647.43 786.972 653.1C754.77 664.428 710.056 671.5 660.5 671.5C610.944 671.5 566.23 664.428 534.028 653.1C517.912 647.43 505.119 640.759 496.423 633.526C487.706 626.276 483.5 618.816 483.5 611.5C483.5 604.184 487.706 596.724 496.423 589.474C505.119 582.241 517.912 575.57 534.028 569.9C566.23 558.572 610.944 551.5 660.5 551.5Z" stroke="#ecbb5a" strokeWidth="7"/>
                                  <path d="M901.5 551.5C951.056 551.5 995.77 558.572 1027.97 569.9C1044.09 575.57 1056.88 582.241 1065.58 589.474C1074.29 596.724 1078.5 604.184 1078.5 611.5C1078.5 618.816 1074.29 626.276 1065.58 633.526C1056.88 640.759 1044.09 647.43 1027.97 653.1C995.77 664.428 951.056 671.5 901.5 671.5C851.944 671.5 807.23 664.428 775.028 653.1C758.912 647.43 746.119 640.759 737.423 633.526C728.706 626.276 724.5 618.816 724.5 611.5C724.5 604.184 728.706 596.724 737.423 589.474C746.119 582.241 758.912 575.57 775.028 569.9C807.23 558.572 851.944 551.5 901.5 551.5Z" stroke="#ecbb5a" strokeWidth="7"/>
                                  <path d="M1369.5 551.5C1419.06 551.5 1463.77 558.572 1495.97 569.9C1512.09 575.57 1524.88 582.241 1533.58 589.474C1542.29 596.724 1546.5 604.184 1546.5 611.5C1546.5 618.816 1542.29 626.276 1533.58 633.526C1524.88 640.759 1512.09 647.43 1495.97 653.1C1463.77 664.428 1419.06 671.5 1369.5 671.5C1319.94 671.5 1275.23 664.428 1243.03 653.1C1226.91 647.43 1214.12 640.759 1205.42 633.526C1196.71 626.276 1192.5 618.816 1192.5 611.5C1192.5 604.184 1196.71 596.724 1205.42 589.474C1214.12 582.241 1226.91 575.57 1243.03 569.9C1275.23 558.572 1319.94 551.5 1369.5 551.5Z" stroke="#ecbb5a" strokeWidth="7"/>
                                  <path d="M1605.5 551.5C1655.06 551.5 1699.77 558.572 1731.97 569.9C1748.09 575.57 1760.88 582.241 1769.58 589.474C1778.29 596.724 1782.5 604.184 1782.5 611.5C1782.5 618.816 1778.29 626.276 1769.58 633.526C1760.88 640.759 1748.09 647.43 1731.97 653.1C1699.77 664.428 1655.06 671.5 1605.5 671.5C1555.94 671.5 1511.23 664.428 1479.03 653.1C1462.91 647.43 1450.12 640.759 1441.42 633.526C1432.71 626.276 1428.5 618.816 1428.5 611.5C1428.5 604.184 1432.71 596.724 1441.42 589.474C1450.12 582.241 1462.91 575.57 1479.03 569.9C1511.23 558.572 1555.94 551.5 1605.5 551.5Z" stroke="#ecbb5a" strokeWidth="7"/>
                                  <path d="M1486.5 493.5C1536.06 493.5 1580.77 500.572 1612.97 511.9C1629.09 517.57 1641.88 524.241 1650.58 531.474C1659.29 538.724 1663.5 546.184 1663.5 553.5C1663.5 560.816 1659.29 568.276 1650.58 575.526C1641.88 582.759 1629.09 589.43 1612.97 595.1C1580.77 606.428 1536.06 613.5 1486.5 613.5C1436.94 613.5 1392.23 606.428 1360.03 595.1C1343.91 589.43 1331.12 582.759 1322.42 575.526C1313.71 568.276 1309.5 560.816 1309.5 553.5C1309.5 546.184 1313.71 538.724 1322.42 531.474C1331.12 524.241 1343.91 517.57 1360.03 511.9C1392.23 500.572 1436.94 493.5 1486.5 493.5Z" stroke="#ecbb5a" strokeWidth="7"/>
                                  <path d="M182.121 474.879C180.95 473.707 179.05 473.707 177.879 474.879L158.787 493.971C157.615 495.142 157.615 497.042 158.787 498.213C159.958 499.385 161.858 499.385 163.029 498.213L180 481.243L196.971 498.213C198.142 499.385 200.042 499.385 201.213 498.213C202.385 497.042 202.385 495.142 201.213 493.971L182.121 474.879ZM180 612L183 612L183 477L180 477L177 477L177 612L180 612Z" fill="#ecbb5a"/>
                                  <path d="M781.121 350.879C779.95 349.707 778.05 349.707 776.879 350.879L757.787 369.971C756.615 371.142 756.615 373.042 757.787 374.213C758.958 375.385 760.858 375.385 762.029 374.213L779 357.243L795.971 374.213C797.142 375.385 799.042 375.385 800.213 374.213C801.385 373.042 801.385 371.142 800.213 369.971L781.121 350.879ZM779 612H782V353H779H776V612H779Z" fill="#ecbb5a"/>
                                  <path d="M1489.12 0.87868C1487.95 -0.292893 1486.05 -0.292893 1484.88 0.87868L1465.79 19.9706C1464.62 21.1421 1464.62 23.0416 1465.79 24.2132C1466.96 25.3848 1468.86 25.3848 1470.03 24.2132L1487 7.24264L1503.97 24.2132C1505.14 25.3848 1507.04 25.3848 1508.21 24.2132C1509.38 23.0416 1509.38 21.1421 1508.21 19.9706L1489.12 0.87868ZM1487 593L1490 593L1490 3L1487 3L1484 3L1484 593L1487 593Z" fill="#ecbb5a"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-balance textWrapStyle-[balance] m-0 mb-2 text-[var(--content-raise-p3)] text-[.875rem] min-[800px]:text-base font-medium min-[800px]:font-medium font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.125rem] min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">13+ Years Core Team Cohesion</h3>
                    <p className="m-0 mb-4 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-4 min-[800px]:leading-[1.125rem] text-[.75rem] min-[800px]:text-[.875rem] tracking-wider min-[800px]:tracking-wider">Our founding-led core team brings over a decade of unified vision and consistent senior expertise directly to your projects, ensuring quality and accountability.</p>
                </div>
                <div className="col-span-6 min-[1000px]:col-span-3">
                    <div className="w-[100%] mb-4 rounded-[var(--border-radius-lg)] border border-[var(--stroke-default-p3)]" style={{ backgroundColor: '#39301f', padding: '12px' }}>
                        <div className="relative pb-[calc(var(--tw-aspect-h)_/_var(--tw-aspect-w)_*_100%)]">
                            <div className="absolute h-[100%] w-[100%] top-0 right-0 bottom-0 left-0 flex items-center justify-center">
                                <img 
                                  src="/img/numbers_4.png" 
                                  alt="Number 4" 
                                  className="w-full h-auto max-w-full max-h-full"
                                  style={{ 
                                    margin: '4px',
                                    filter: 'brightness(0) saturate(100%) invert(68%) sepia(58%) saturate(385%) hue-rotate(7deg) brightness(93%) contrast(88%)'
                                  }}
                                />
                            </div>
                        </div>
                    </div>
                    <h3 className="text-balance textWrapStyle-[balance] m-0 mb-2 text-[var(--content-raise-p3)] text-[.875rem] min-[800px]:text-base font-medium min-[800px]:font-medium font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] leading-[1.125rem] min-[800px]:leading-6 tracking-wider min-[800px]:tracking-wide">Dedicated to Ideal Partnerships</h3>
                    <p className="m-0 mb-4 text-[var(--content-secondary-p3)] font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] min-[800px]:font-[SuisseIntl,-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif] font-normal min-[800px]:font-normal leading-4 min-[800px]:leading-[1.125rem] text-[.75rem] min-[800px]:text-[.875rem] tracking-wider min-[800px]:tracking-wider">We deliberately focus our deep expertise where we can create maximum impact, ensuring every partnership is set up for profound and transformative success.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}