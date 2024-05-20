import Layout from "../components/layout";
import Seo from "../components/seo"
export default function Portraits() {
    return (
      <Layout>
        <Seo title="Wedding Portraits Portfolio | 4 Eyes Photography" description="Beauty in every detail." />
        <div id="banner-559">
          <div className="cs-container">
            <span className="cs-int-topper">beauty in every details</span>
            <span className="cs-int-title">Wedding Portraits</span>
            <div className="cs-breadcrumbs">
              <a href="/" className="cs-link">Home</a>
              <a href="/portraits" className="cs-link cs-active">Portraits</a>
            </div>
          </div>
          {/*Background Image*/}
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2020/12/Portrait-Session-Banff-Wedding-Photographers-11.jpg
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2020/12/Portrait-Session-Banff-Wedding-Photographers-11.jpg
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/12/Portrait-Session-Banff-Wedding-Photographers-11.jpg" alt="portrait photography portfolio" width={1280} height={568} aria-hidden="true" />
          </picture>
        </div>
        {/* ============================================ */}
        {/*                  Content                     */}
        {/* ============================================ */}
        <section id="content-1450">
          <div className="cs-container">
            <div className="cs-content">
              <span className="cs-topper">portraits</span>
              <h2 className="cs-title">moments that last a lifetime</h2>
              <p className="cs-text">
                Explore our wedding portraits portfolio and marvel at the beauty of
                every detail. From intricate lace to sparkling eyes, each image is a
                testament to the artistry and craftsmanship that goes into capturing
                your love story.
                <a href="/contact" target="_blank">get your portraits!</a>
              </p>
            </div>
          </div>
        </section>
        {/* ============================================ */}
        {/*                    Gallery                  */}
        {/* ============================================ */}
        <section id="gallery-1752">
          <div className="cs-container">
            <ul className="cs-card-group">
              <li className="cs-item">
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/Calgary-best-couple-portrait-photography.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/Calgary-best-couple-portrait-photography.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/Calgary-best-couple-portrait-photography.jpg" alt="portrait" width={328} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/worlds-best-couple-portrait-photography.JPG
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/worlds-best-couple-portrait-photography.JPG
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/worlds-best-couple-portrait-photography.JPG" alt="portrait" width={328} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2022/07/Portraits-Banff-Wedding-Photography-2.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2022/07/Portraits-Banff-Wedding-Photography-2.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/07/Portraits-Banff-Wedding-Photography-2.jpg" alt="portrait" width={328} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2020/01/Portrait-Engagement-Session-Banff-Wedding-Photographers-8.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2020/01/Portrait-Engagement-Session-Banff-Wedding-Photographers-8.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/01/Portrait-Engagement-Session-Banff-Wedding-Photographers-8.jpg" alt="portrait in banff" width={328} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    );
  }