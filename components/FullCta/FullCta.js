import React from "react";

export default function FullCta() {
    return (
 <section id="hero-1950">
        <div className="cs-container">
          <div className="cs-content">
            <h1 className="cs-title">Capturing Moments That Last a Lifetime</h1>
            <div className="cs-flex-group">
              <p className="cs-text">We'd be so thrilled to be part of your wedding journey - contact us to save the date today!</p>
              <a href="/contact" className="cs-button-solid">Contact Us</a>
            </div>
          </div>
        </div>
        {/* Background Image, there's a background image in the CSS for the parallax effect you'll need to change as well if you swap out our images */}
        <picture className="cs-background">
          <source media="(max-width: 600px)" srcSet="http://www.4eyes.purpleparrotwebsites.com/wp-content/uploads/2024/05/Banff-Wedding-Photographer-1.webp" />
          <source media="(min-width: 601px)" srcSet="http://www.4eyes.purpleparrotwebsites.com/wp-content/uploads/2024/05/Banff-Wedding-Photographer-1.webp" />
          <img decoding="async" src="http://www.4eyes.purpleparrotwebsites.com/wp-content/uploads/2024/05/Banff-Wedding-Photographer-1.webp" alt="restaurant" width={2250} height={1500} aria-hidden="true" />
        </picture>
      </section>
    );
}