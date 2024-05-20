// import "../styles/contact.scss"
import Form from "../components/Form/Form"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Contact() {
    return (
        <Layout>
          <Seo title="Contact 4 Eyes Photography" description="Contact us here!" />
        <div id="banner-559">
          <div className="cs-container">
            <span className="cs-int-topper">4 Eyes Photography</span>
            <span className="cs-int-title">Contact Us</span>
            <div className="cs-breadcrumbs">
              <a href="/" className="cs-link">Home</a>
              <a href="/contact" className="cs-link cs-active">Contact</a>
            </div>
          </div>
          {/*Background Image*/}
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2021/02/contact-us-1.jpg
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2021/02/contact-us-1.jpg
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2021/02/contact-us-1.jpg" alt="contact 4 eyes photography" width={1280} height={568} aria-hidden="true" />
          </picture>
          
        </div><Form />
        </Layout>
    );
  }