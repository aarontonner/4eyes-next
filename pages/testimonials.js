import Layout from "../components/layout";
// import "../styles/testimonials.scss"
import Seo from "../components/seo"
export default function Testimonials() {
    return (
      <Layout>
        <Seo title="Testimonials | 4 Eyes Photography" description="Our customers love us!" />
        <div id="banner-559">
          <div className="cs-container">
            <span className="cs-int-topper">the 4Eyes photography experience</span>
            <span className="cs-int-title">Words Of The Bride &amp; Groom</span>
            <div className="cs-breadcrumbs">
              <a href="/" className="cs-link">Home</a>
              <a href="/testimonials" className="cs-link cs-active">Testimonials</a>
            </div>
          </div>
          {/*Background Image*/}
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2022/06/engagement-winning-photo-Banff-6.jpg
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2022/06/engagement-winning-photo-Banff-6.jpg
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/06/engagement-winning-photo-Banff-6.jpg" alt="testimonials" width={1280} height={568} aria-hidden="true" />
          </picture>
        </div>
      </Layout>
    );
  }