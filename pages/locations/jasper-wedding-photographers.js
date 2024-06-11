// import "../styles/services.scss"

import Form from "../../components/Form/Form";
import Layout from "../../components/layout";
import Seo from "../../components/seo"

export default function Jasper() {
    return (
      <Layout>
        <Seo title="Jasper Wedding Photographers | 4Eyes Photography" description="Your Jasper wedding photographers!" />
        <div id="banner-559">
          <div className="cs-container">
            <span className="cs-int-topper">4Eyes Photography</span>
            <span className="cs-int-title">Jasper Wedding Photography</span>
            <div className="cs-breadcrumbs">
              <a href="/" className="cs-link">Home</a>
              <a href="/locations" className="cs-link cs-active">Locations</a>
              <a href="/jasper-wedding-photographers" className="cs-link cs-active">Jasper</a>
            </div>
          </div>
          {/*Background Image*/}
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2021/12/Banff-Mountain-Adventure-2.jpg
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2021/12/Banff-Mountain-Adventure-2.jpg
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2021/12/Banff-Mountain-Adventure-2.jpg" alt="jasper wedding photographers" width={1280} height={568} aria-hidden="true" />
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
                  <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/03/Canadian-Farm-Wedding-In-Calgary-4.JPG" alt="wedding photography jasper, ab" width={542} height={728} />
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
                    lens when photographing Jasper weddings. When we're not behind the
                    shutter click, we're brainstorming more ideas to take our Jasper
                    wedding photography to the next level.
                  </p>
                </li>
                <li className="cs-item">
                  <h3 className="cs-h3">
                    <img className="cs-h3-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/circle-check.svg" alt="icon" width={32} height={32} />
                    Wanderlust Adventures in Jasper
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
                <span className="cs-color">Jasper Wedding Photographers</span>
              </h1>
              <p>
                Jasper is renowned for its stunning natural landscapes, from rugged mountains to pristine lakes, making it an ideal location for wedding photography. The untouched beauty of Jasper National Park provides a dramatic and captivating backdrop that enhances the romance of your wedding day. With its vast wilderness and diverse scenery, Jasper offers countless opportunities for creating breathtaking and unique wedding photos that you will cherish forever.
              </p>
              <h2>Why Choose 4Eyes for Your Jasper Wedding Photography?</h2>
              <p>4Eyes Photography stands out in Jasper for its dedication to capturing the authentic beauty and emotion of your wedding day. Eliza and Lukas bring their extensive experience and artistic vision to every shoot, ensuring that each photo reflects the uniqueness of your love story. Their knowledge of Jasper’s landscapes allows them to create stunning, personalized images that highlight the natural splendor of this magnificent location.

</p>
              <h3>Our Favorite Wedding Photography in Jasper</h3>
              <ul>
                <li>
                  Pyramid Lake: A picturesque lake with serene waters and the majestic Pyramid Mountain in the background, ideal for romantic photos.
                </li>
                <li>
                 Maligne Lake: Known for its striking blue waters and Spirit Island, offering iconic and unforgettable photo opportunities.
                </li>
                <li>
                  Athabasca Falls: The powerful waterfall and surrounding canyon provide a dramatic setting for adventurous couples.
                </li>
                <li>
                 Old Fort Point: Offers panoramic views of the town of Jasper and the surrounding mountains, perfect for scenic shots.
                </li>
                <li>
                  Medicine Lake: A unique and beautiful location with reflective waters and stunning mountain views.
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