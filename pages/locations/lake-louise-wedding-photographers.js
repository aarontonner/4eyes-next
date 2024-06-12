// import "../styles/services.scss"

import Link from "next/link";
import Form from "../../components/Form/Form";
import SingleReview from "../../components/SingleReview/SingleReview";
import Layout from "../../components/layout";
import Seo from "../../components/seo"

export default function LakeLouise() {
    return (
      <Layout>
        <Seo title="Lake Louise Wedding Photographers | 4Eyes Photography" description="Your Lake Louise wedding photographers!" />
        <div id="banner-559">
          <div className="cs-container">
            <span className="cs-int-topper">4Eyes Photography</span>
            <span className="cs-int-title">Lake Louise Wedding Photography</span>
            <div className="cs-breadcrumbs">
              <a href="/" className="cs-link">Home</a>
              <a href="/" className="cs-link cs-active">Locations</a>
              <a href="/locations/lake-louise-wedding-photographers" className="cs-link cs-active">Lake Louise</a>
            </div>
          </div>
          {/*Background Image*/}
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2024/05/Lake-Louise-Engagement-Photography-14.JPG
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2024/05/Lake-Louise-Engagement-Photography-14.JPG
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/05/Lake-Louise-Engagement-Photography-14.JPG" alt="lake louise wedding photographers" width={1280} height={568} aria-hidden="true" />
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
                  <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/03/Canadian-Farm-Wedding-In-Calgary-4.JPG" alt="wedding photography lake louise, ab" width={542} height={728} />
                </picture>
              </div>
              <ul className="cs-card-group">
                <li className="cs-item">
                  <h3 className="cs-h3">
                    <img className="cs-h3-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/trophy.svg" alt="icon" width={32} height={32} />
                    Immersive Storytelling
                  </h3>
                  <p className="cs-item-text">
                    At <Link href="/" className="anchor">4Eyes Photography</Link>, creativity is our driving force behind the
                    lens when photographing Lake Louise weddings. When we're not behind the
                    shutter click, we're brainstorming more ideas to take our Lake Louise
                    wedding photography to the next level.
                  </p>
                </li>
                <li className="cs-item">
                  <h3 className="cs-h3">
                    <img className="cs-h3-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/circle-check.svg" alt="icon" width={32} height={32} />
                    Wanderlust Adventures in Lake Louise
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
                <span className="cs-color">Lake Louise Wedding Photographers</span>
              </h1>
              <p>
                Lake Louise is renowned for its turquoise waters, majestic mountains, and lush forests, making it one of the most picturesque locations for wedding photography. The iconic scenery of Lake Louise, including the stunning Victoria Glacier, provides a romantic and awe-inspiring backdrop that perfectly complements the beauty of your wedding day. The natural splendor of this location ensures that your wedding photos will be as breathtaking as the love you share.


              </p>
              <h2>Why Choose 4Eyes for Your Lake Louise Wedding Photography?</h2>
              <p>4Eyes Photography offers a unique and personalized approach to capturing the magic of your wedding day in Lake Louise. Eliza and Lukas combine their artistic talent and deep appreciation for the natural beauty of the area to create stunning images that tell your love story. Their commitment to excellence and attention to detail ensure that every moment is beautifully captured, providing you with timeless memories of your special day.</p>
              
            </div>
          </div>
          <div className="cs-bubbles" aria-hidden="true" />
        </section>
        <SingleReview />
        <Form />
      </Layout>
    );
  }