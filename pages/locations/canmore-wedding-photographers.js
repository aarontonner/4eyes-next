// import "../styles/services.scss"

import Form from "../../components/Form/Form";
import Layout from "../../components/layout";
import Seo from "../../components/seo"

export default function Canmore() {
    return (
      <Layout>
        <Seo title="Canmore Wedding Photographers | 4Eyes Photography" description="Your Canmore wedding photographers!" />
        <div id="banner-559">
          <div className="cs-container">
            <span className="cs-int-topper">4Eyes Photography</span>
            <span className="cs-int-title">Canmore Wedding Photography</span>
            <div className="cs-breadcrumbs">
              <a href="/" className="cs-link">Home</a>
              <a href="/locations" className="cs-link cs-active">Locations</a>
              <a href="/canmore-wedding-photographers" className="cs-link cs-active">Canmore</a>
            </div>
          </div>
          {/*Background Image*/}
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2020/10/Canmore-Wedding-Photographers.jpg
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2020/10/Canmore-Wedding-Photographers.jpg
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/10/Canmore-Wedding-Photographers.jpg" alt="canmore wedding photographers" width={1280} height={568} aria-hidden="true" />
          </picture>
        </div>
        {/* ============================================ */}
        {/*                 Content Page                 */}
        {/* ============================================ */}
        {/* ============================================ 
    This Stitch is used for content heavy interior pages
    that have no design or layout.  Often times these are 
    content silos where you talk extensively about a topic
    to educate your visitors and rank on Google for the 
    content.  These are great for pages that have a TON
    of content.  Design isn't important here, it's all 
    about making the content accessible and easy to read.
================================================= */}
        <section id="content-page-1399">
          <div className="cs-container">
            <div className="cs-image-group">
              <div className="cs-flex">
                <picture className="cs-background">
                  {/*Mobile Image*/}
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2024/03/Canadian-Farm-Wedding-In-Calgary-4.JPG
            " />
                  {/*Tablet and above Image*/}
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2024/03/Canadian-Farm-Wedding-In-Calgary-4.JPG
            " />
                  <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/03/Canadian-Farm-Wedding-In-Calgary-4.JPG" alt="wedding photography canmore, ab" width={542} height={728} />
                </picture>
              </div>
              <ul className="cs-card-group">
                <li className="cs-item">
                  <h3 className="cs-h3">
                    <img className="cs-h3-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/trophy.svg" alt="icon" width={32} height={32} />
                    Immersive Storytelling
                  </h3>
                  <p className="cs-item-text">
                    At 4Eyes Photography, creativity is our driving force behind the
                    lens when photographing Canmore weddings. When we're not behind the
                    shutter click, we're brainstorming more ideas to take our Canmore
                    wedding photography to the next level.
                  </p>
                </li>
                <li className="cs-item">
                  <h3 className="cs-h3">
                    <img className="cs-h3-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/circle-check.svg" alt="icon" width={32} height={32} />
                    Wanderlust Adventures in Canmore
                  </h3>
                  <p className="cs-item-text">
                    We travel far and wide to capture
                    your love story in stunning detail. No destination is too far, no
                    adventure too grand for us to embark on with you.
                  </p>
                </li>
              </ul>
            </div>
            <div className="cs-content">
              <h1 className="cs-title">
                <span className="cs-color">Canmore Wedding Photographers</span>
              </h1>
              <p>
                Canmore, nestled in the heart of the Canadian Rockies, offers a breathtaking backdrop for wedding photography. The town’s stunning mountain vistas, lush forests, and serene lakes create a picturesque setting that’s perfect for capturing the romance and magic of your special day. The natural beauty of Canmore provides endless opportunities for unique and memorable wedding photos, making it a top choice for couples seeking an unforgettable wedding experience.
              </p>
              <h2>Why Choose 4Eyes for Your Canmore Wedding Photography?</h2>
              <p>Choosing 4Eyes Photography for your Canmore wedding means entrusting your special day to experienced professionals who are passionate about capturing the essence of your love story. Eliza and Lukas, the dynamic duo behind 4Eyes Photography, bring creativity, expertise, and a personalized touch to every shoot. Their familiarity with Canmore’s stunning landscapes ensures that every photo session is uniquely tailored to highlight the beauty of your surroundings and the joy of your celebration.

</p>
              <h3>Our Favorite Wedding Photography in Canmore</h3>
              <ul>
                <li>
                  Quarry Lake Park: A beautiful spot with scenic lake views and towering mountains, perfect for intimate and grand wedding photos.
                </li>
                <li>
                  Three Sisters Mountains: Iconic peaks that provide a majestic backdrop for dramatic and awe-inspiring images.
                </li>
                <li>
                  Policeman’s Creek Boardwalk: A serene setting with a charming boardwalk, ideal for capturing romantic, candid moments.
                </li>
                <li>
                  Canmore Nordic Centre: Offers a mix of natural beauty and well-maintained trails, perfect for adventurous couples.
                </li>
                <li>
                  Bow River: The river’s tranquil waters and surrounding greenery create a serene and picturesque environment for photos.
                </li>
              </ul>
            </div>
          </div>
          <div className="cs-bubbles" aria-hidden="true" />
        </section>
        <Form />
      </Layout>
    );
  }