import Layout from "../layout";
import Seo from "../seo"

export default function ContentCard({ data }) {
  const {
    extraFields: {
      bannerImage,
      blogGalleries: { nodes },
    },
    content,
    title,
    portfolioFields: { bannerHeading, contentTitle },
  } = data || {};
  return (
    <Layout>
      <Seo
        title="Wedding Photography Portfolio | 4 Eyes Photography"
        description="There are no words to describe how important this day is for you, your families, and close friends. Every moment, every detail is worth remembering and capturing, giving memories that last a lifetime! Whether you are having a grand wedding or a private and intimate elopement, we are here for you to create unique moments on your Big Day."
      />
      <div id="banner-559">
        <div className="cs-container">
          <span className="cs-int-topper">{bannerHeading}</span>
          <span className="cs-int-title">{title}</span>
          <div className="cs-breadcrumbs">
            <a href="/" className="cs-link">
              Home
            </a>
            <a href="/wedding" className="cs-link cs-active">
              {title}
            </a>
          </div>
        </div>
        {/*Background Image*/}
        <picture className="cs-background">
          {/*Mobile Image*/}
          <source
            media="(max-width: 600px)"
            srcSet={bannerImage?.node?.sourceUrl}
          />
          {/*Tablet and above Image*/}
          <source
            media="(min-width: 601px)"
            srcSet={bannerImage?.node?.sourceUrl}
          />
          <img
            loading="lazy"
            decoding="async"
            srcSet={bannerImage?.node?.sourceUrl}
            alt={bannerImage?.node?.altText}
            width={1280}
            height={568}
            aria-hidden="true"
          />
        </picture>
      </div>
      {/* ============================================ */}
      {/*                  Content                     */}
      {/* ============================================ */}
      <section id="content-1450">
        <div className="cs-container">
          <div className="cs-content">
            <span className="cs-topper">{title}</span>
            <h2 className="cs-title">{contentTitle}</h2>
            <p className="cs-text">{content?.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            <a href="/contact" className="cs-button-solid">
              Contact us
            </a>
          </div>
        </div>
      </section>
      {/* ============================================ */}
      {/*                    Gallery                  */}
      {/* ============================================ */}
      <section id="gallery-1752">
        <div className="cs-container">
          <ul className="cs-card-group">
            {nodes?.map((img) => {
              return (
                <li className="cs-item">
                  <picture className="cs-picture">
                    <source
                      media="(max-width: 600px)"
                      srcSet={img?.sourceUrl}
                    />
                    <source
                      media="(min-width: 601px)"
                      srcSet={img?.sourceUrl}
                    />
                    <img
                      decoding="async"
                      srcSet={img?.sourceUrl}
                      alt={img?.altText}
                      width={328}
                      height={400}
                      aria-hidden="true"
                      loading="lazy"
                    />
                  </picture>
                </li>
              );
            })}

            {/* <li className="cs-item">
                <picture className="cs-picture">
                  <source
                    media="(max-width: 600px)"
                    srcSet="
                https://4eyesphotography.ca/wp-content/uploads/2020/12/Banff-Wedding-Photography-5.JPG
              "
                  />
                  <source
                    media="(min-width: 601px)"
                    srcSet="
                https://4eyesphotography.ca/wp-content/uploads/2020/12/Banff-Wedding-Photography-5.JPG
              "
                  />
                  <img
                    decoding="async"
                    src="https://4eyesphotography.ca/wp-content/uploads/2020/12/Banff-Wedding-Photography-5.JPG"
                    alt="wedding photo in banff"
                    width={328}
                    height={400}
                    aria-hidden="true"
                    loading="lazy"
                  />
                </picture>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  <source
                    media="(max-width: 600px)"
                    srcSet="
                https://4eyesphotography.ca/wp-content/uploads/2020/12/002Calgary-Wedding-Photographer-1.JPG
              "
                  />
                  <source
                    media="(min-width: 601px)"
                    srcSet="
                https://4eyesphotography.ca/wp-content/uploads/2020/12/002Calgary-Wedding-Photographer-1.JPG
              "
                  />
                  <img
                    decoding="async"
                    src="https://4eyesphotography.ca/wp-content/uploads/2020/12/002Calgary-Wedding-Photographer-1.JPG"
                    alt="wedding photo in calgary"
                    width={328}
                    height={400}
                    aria-hidden="true"
                    loading="lazy"
                  />
                </picture>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  <source
                    media="(max-width: 600px)"
                    srcSet="
                https://4eyesphotography.ca/wp-content/uploads/2020/12/Calgary-Wedding-Photography-1-1.JPG
              "
                  />
                  <source
                    media="(min-width: 601px)"
                    srcSet="
                https://4eyesphotography.ca/wp-content/uploads/2020/12/Calgary-Wedding-Photography-1-1.JPG
              "
                  />
                  <img
                    decoding="async"
                    src="https://4eyesphotography.ca/wp-content/uploads/2020/12/Calgary-Wedding-Photography-1-1.JPG"
                    alt="wedding photo in calgary"
                    width={328}
                    height={400}
                    aria-hidden="true"
                    loading="lazy"
                  />
                </picture>
              </li> */}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
