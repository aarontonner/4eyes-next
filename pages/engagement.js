// import "../styles/portfolio.scss"

import Layout from "../components/layout";
import Seo from "../components/seo"

export default function Engagement() {
    return (
      <Layout>
        <Seo title="Engagement Portfolio | 4 Eyes Photography" description="Celebrate the journey of love and commitment with our engagement
  photography portfolio" />
        <div id="banner-559">
          <div className="cs-container">
            <span className="cs-int-topper">love in focus</span>
            <span className="cs-int-title">Engagement Portfolio</span>
            <div className="cs-breadcrumbs">
              <a href="/" className="cs-link">Home</a>
              <a href="/engagement" className="cs-link cs-active">Engagement Portfolio</a>
            </div>
          </div>
          {/*Background Image*/}
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2023/07/Banff-Engagement-4.JPG
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2023/07/Banff-Engagement-4.JPG
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/07/Banff-Engagement-4.JPG" alt="engagement photography portfolio" width={1280} height={568} aria-hidden="true" />
          </picture>
        </div>
        {/* ============================================ */}
        {/*                  Content                     */}
        {/* ============================================ */}
        <section id="content-1450">
          <div className="cs-container">
            <div className="cs-content">
              <span className="cs-topper">engagements</span>
              <h2 className="cs-title">Celebrating the journey of love</h2>
              <p className="cs-text">
                As a married couple, we know how important and exciting this time is for
                you to have finally chosen to spend a lifetime together. You trust each
                other and see a bright future ahead. We can help you celebrate your love
                by capturing these precious moments. This is just the beginning of your
                journey as a couple, and we are here for you to capture the beautiful
                reminiscences of
                <a href="https://parade.com/969642/marynliles/engagement-quotes/" target="_blank">how it all began.</a>
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
              https://4eyesphotography.ca/wp-content/uploads/2020/01/Banff-Wedding-Photographer-2.JPG
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2020/01/Banff-Wedding-Photographer-2.JPG
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/01/Banff-Wedding-Photographer-2.JPG" alt="banff wedding engagement" width={328} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2020/01/Engagement-Moraine-Lake.JPG
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2020/01/Engagement-Moraine-Lake.JPG
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/01/Engagement-Moraine-Lake.JPG" alt="engagement moraine lake photo" width={328} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2022/08/Lake-Louise-Engagement-Photography-4.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2022/08/Lake-Louise-Engagement-Photography-4.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/08/Lake-Louise-Engagement-Photography-4.jpg" alt="lake louis wedding photography" width={328} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2023/06/Banff-Engagement-Photography007.JPG
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2023/06/Banff-Engagement-Photography007.JPG
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/06/Banff-Engagement-Photography007.JPG" alt="banff engagement photo" width={328} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
            </ul>
          </div>
        </section>
        
      </Layout>
    );
  }