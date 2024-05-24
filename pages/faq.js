// import "../styles/faq.scss"
import { useState } from "react";
import Form from "../components/Form/Form";
import Layout from "../components/layout";
import Seo from "../components/seo";
const faqData = [
  {
    question: "What is your photography style?",
    answer:
      "In a few words it is Authentic, Real, Timeless, Creative, Documentary and Magical. As artistic storytellers, we capture your wedding day the way it is. We do not stage or direct anything as we truly want you to enjoy yourselves during your Big Day. We want you to be focused on your partner, family, and friends – enjoy the moment – it is your day. Trust us, the more you ignore your wedding photographers, the better candid photographs you get. Our goal is to tell a real story of your wedding day through unique and timeless photographs that will bring tears of happiness.",
  },
  {
    question: "What wedding packages do you offer?",
    answer:
      "We offer a variety of packages, so we meet our couples’ expectations and needs. However, it is a good idea to consider a full-day wedding package to tell a complete wedding day story. Getting ready, ceremony, portraits, reception, first dance and fun dance-floor. Please get in touch with us for more info.",
  },
  {
    question: "What do your wedding packages include?",
    answer:
      "– Two creative, professional photographers, – Private, online Art Gallery, – Printing rights for personal use, – Fully and professionally edited images, – Web-size and high-res digital downloads, – Slideshow to share with your family and friends, – Required Park permits + licenses – No extra travel fees for Banff National Park, Kananaskis Country, Canmore, or the Calgary area,",
  },
  // Add more FAQ items as needed
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleActive = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };
  return (
    <Layout>
      <Seo
        title="FAQ | 4 Eyes Photography"
        description="Find the answers to your wedding photography questions here!"
      />
      <div id="banner-559">
        <div className="cs-container">
          <span className="cs-int-topper">have questions?</span>
          <span className="cs-int-title">FAQ</span>
          <div className="cs-breadcrumbs">
            <a href="/" className="cs-link">
              Home
            </a>
            <a href="/faq" className="cs-link cs-active">
              FAQ
            </a>
          </div>
        </div>
        {/*Background Image*/}
        <picture className="cs-background">
          {/*Mobile Image*/}
          <source
            media="(max-width: 600px)"
            srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2019/01/best-banff-after-wedding-award-winning-photo-3.jpg
      "
          />
          {/*Tablet and above Image*/}
          <source
            media="(min-width: 601px)"
            srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2019/01/best-banff-after-wedding-award-winning-photo-3.jpg
      "
          />
          <img
            loading="lazy"
            decoding="async"
            src="https://4eyesphotography.ca/wp-content/uploads/2019/01/best-banff-after-wedding-award-winning-photo-3.jpg"
            alt="wedding photography faq"
            width={1280}
            height={568}
            aria-hidden="true"
          />
        </picture>
      </div>
      {/* ============================================ */}
      {/*                    FAQ                       */}
      {/* ============================================ */}
      <section id="faq-1776">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">Frequently Asked Questions</span>
            <h2 className="cs-title">FAQ for the bride and groom</h2>
            <a href="/contact" className="cs-button-solid">
              {" "}
              have Another Question?{" "}
            </a>
          </div>
          <div className="cs-flex-group">
            <ul className="cs-faq-group">
              {faqData.map((item, index) => (
                <li
                  key={index}
                  className={`cs-faq-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                >
                  <button
                    className="cs-button"
                    onClick={() => toggleActive(index)}
                  >
                    <span className="cs-button-text">{item.question}</span>
                  </button>
                  <p className="cs-item-text">{item.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cs-gallery">
          {/*Picture 1*/}
          <picture className="cs-picture">
            <source
              media="(max-width: 600px)"
              srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2024/04/Calgary-Wedding-Photographs-19.JPG
        "
            />
            <source
              media="(min-width: 601px)"
              srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2024/04/Calgary-Wedding-Photographs-19.JPG
        "
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://4eyesphotography.ca/wp-content/uploads/2024/04/Calgary-Wedding-Photographs-19.JPG"
              alt="wedding photo during speech"
              width={272}
              height={320}
            />
          </picture>
          {/*Picture 2*/}
          <picture className="cs-picture">
            <source
              media="(max-width: 600px)"
              srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2019/01/Best-Calgary-Wedding-Photographer.JPG
        "
            />
            <source
              media="(min-width: 601px)"
              srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2019/01/Best-Calgary-Wedding-Photographer.JPG
        "
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://4eyesphotography.ca/wp-content/uploads/2019/01/Best-Calgary-Wedding-Photographer.JPG"
              alt="wedding photo on a mountain"
              width={272}
              height={320}
            />
          </picture>
          {/*Picture 3*/}
          <picture className="cs-picture">
            <source
              media="(max-width: 600px)"
              srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2022/10/Calgary-Wedding-Photographer-15.jpg
        "
            />
            <source
              media="(min-width: 601px)"
              srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2022/10/Calgary-Wedding-Photographer-15.jpg
        "
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://4eyesphotography.ca/wp-content/uploads/2022/10/Calgary-Wedding-Photographer-15.jpg"
              alt="wedding photo eating cake"
              width={272}
              height={320}
            />
          </picture>
          {/*Picture 4*/}
          <picture className="cs-picture">
            <source
              media="(max-width: 600px)"
              srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2022/09/Calgary-Wedding-Photographer.jpg
        "
            />
            <source
              media="(min-width: 601px)"
              srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2022/09/Calgary-Wedding-Photographer.jpg
        "
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://4eyesphotography.ca/wp-content/uploads/2022/09/Calgary-Wedding-Photographer.jpg"
              alt="wedding photo in alberta"
              width={272}
              height={320}
            />
          </picture>
          {/*Picture 5*/}
          <picture className="cs-picture">
            <source
              media="(max-width: 600px)"
              srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2022/01/Calgary-Wedding-Photographer-4.jpg
        "
            />
            <source
              media="(min-width: 601px)"
              srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2022/01/Calgary-Wedding-Photographer-4.jpg
        "
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://4eyesphotography.ca/wp-content/uploads/2022/01/Calgary-Wedding-Photographer-4.jpg"
              alt="bride getting hair done photo"
              width={272}
              height={320}
            />
          </picture>
        </div>
      </section>
      <Form />
    </Layout>
  );
}
