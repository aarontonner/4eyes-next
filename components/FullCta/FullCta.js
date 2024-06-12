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
          <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2020/01/Portrait-Engagement-Session-Banff-Wedding-Photographers-8.jpg" />
          <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2020/01/Portrait-Engagement-Session-Banff-Wedding-Photographers-8.jpg" />
          <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/01/Portrait-Engagement-Session-Banff-Wedding-Photographers-8.jpg" alt="wedding elopment photography in banff" width={2250} height={1500} aria-hidden="true" />
        </picture>
      </section>
    );
}