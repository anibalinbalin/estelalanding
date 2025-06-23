"use client";

export const ClosingSection = () => {
  return (
    <section className="w-full mt-0 mb-4">
      <div className="container mx-auto px-5 sm:px-10">
        <div className="flex flex-col col-span-12 items-center text-center">
          <p 
            className="w-[100%] m-0 text-balance max-w-[900px] font-normal"
            style={{
              fontFamily: 'SuisseIntl, -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
              fontStyle: 'normal',
              fontWeight: '400',
              color: 'color(display-p3 0.4941 0.5137 0.5216)',
              fontSize: '25px',
              lineHeight: '32px'
            }}
          >
            The Cyclops likely had layers of management. <span style={{ color: 'color(display-p3 0.8431 0.8471 0.851)' }}>Odysseus had a tight crew and a clear objective.</span> We believe in the latter. No getting lost in the crowd, no diluted responsibility. When you work with Estela, you get *us* – six minds directly invested in your success. <span style={{ color: 'color(display-p3 0.8431 0.8471 0.851)' }}>It's not about outmuscling the problem; it's about outthinking it,</span> with the focused intensity only a truly cohesive team can provide.
          </p>
        </div>
      </div>
    </section>
  );
};