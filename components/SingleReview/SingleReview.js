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
            <source media="(max-width: 600px)" srcSet="http://www.4eyes.purpleparrotwebsites.com/wp-content/uploads/2024/05/Calgary-Wedding-Photography-1-1.webp" />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="http://www.4eyes.purpleparrotwebsites.com/wp-content/uploads/2024/05/Calgary-Wedding-Photography-1-1.webp" />
            <img loading="lazy" decoding="async" src="http://www.4eyes.purpleparrotwebsites.com/wp-content/uploads/2024/05/Calgary-Wedding-Photography-1-1.webp" alt="group at a table" width={950} height={720} />
          </picture>
        </div>
      </section>
    );
}