// scss components

export default function SingleReview() {
    return (
 <section id="reviews-1335">
        <div className="cs-container">
          <div className="cs-content">
            <img className="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/yellow-quote.svg" alt="quote" width={97} height={80} />
            <p className="cs-review">
              "I would honestly recommend 4Eyes Photography to everyone! Not only are their photos absolutely incredible but they also ended up being some of my favorite wedding guests. They were a blast and made my awkward self feel like I was just hanging out with friends. If I could give a higher score than 5 stars I would!""
            </p>
            <span className="cs-name">Christina C.</span>
          </div>
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2024/04/Canmone-Wedding-Photographer-2.JPG" />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2024/04/Canmone-Wedding-Photographer-2.JPG" />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/04/Canmone-Wedding-Photographer-2.JPG" alt="review of wedding photography services" width={950} height={720} />
          </picture>
        </div>
      </section>
    );
}