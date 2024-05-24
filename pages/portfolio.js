import Layout from "../components/layout";
import Seo from "../components/seo"

// import "../styles/portfolio.scss"
export default function Portfolio() {
    return (
      <Layout>
        <Seo title="Portfolios | 4 Eyes Photography" description="Join us on this extraordinary journey, where creativity knows no limits, and every moment is captured with passion and precision." />
        <div id="banner-559">
          <div className="cs-container">
            <span className="cs-int-topper">the 4Eyes photography experience</span>
            <span className="cs-int-title">Signature Portfolios</span>
            <div className="cs-breadcrumbs">
              <a href="/" className="cs-link">Home</a>
              <a href="/portfolio" className="cs-link cs-active">Potrfolios</a>
            </div>
          </div>
          {/*Background Image*/}
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-best-wedding-winning-photo-4.jpg
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-best-wedding-winning-photo-4.jpg
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-best-wedding-winning-photo-4.jpg" alt="about 4 eyes photography" width={1280} height={568} aria-hidden="true" />
          </picture>
        </div>
        {/* ============================================ */}
        {/*                    Services                  */}
        {/* ============================================ */}
        <section id="gallery-1752">
          <div className="cs-container">
            <ul className="cs-card-group">
              <li className="cs-item">
                <a href="/portraits" className="cs-link">
                  <h3 className="cs-h3 cs-hover-text">Wedding Portraits</h3>
                </a>
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2020/01/Portrait-Engagement-Session-Banff-Wedding-Photographers-8.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2020/01/Portrait-Engagement-Session-Banff-Wedding-Photographers-8.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/01/Portrait-Engagement-Session-Banff-Wedding-Photographers-8.jpg" alt="wedding portrait" width={328} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              <li className="cs-item">
                <a href="/wedding" className="cs-link">
                  <h3 className="cs-h3 cs-hover-text">Wedding Moments</h3>
                </a>
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2024/04/Canmone-Wedding-Photographer-2.JPG
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2024/04/Canmone-Wedding-Photographer-2.JPG
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/04/Canmone-Wedding-Photographer-2.JPG" alt="wedding moments" width={328} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              <li className="cs-item">
                <a href="/engagement" className="cs-link">
                  <h3 className="cs-h3 cs-hover-text">Engagements</h3>
                </a>
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2023/07/Banff-Engagement-Photographer-3.JPG
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2023/07/Banff-Engagement-Photographer-3.JPG
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/07/Banff-Engagement-Photographer-3.JPG" alt="wedding engagements" width={328} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              <li className="cs-item">
                <a href="/winning-photos" className="cs-link">
                  <h3 className="cs-h3 cs-hover-text">Winning Photos</h3>
                </a>
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-wedding-photography-award-winning-engagement-photo.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-wedding-photography-award-winning-engagement-photo.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-wedding-photography-award-winning-engagement-photo.jpg" alt="winning photos" width={328} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    );
  }