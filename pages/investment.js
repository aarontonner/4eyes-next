import Layout from "../components/layout";
import Form from "../components/Form/Form"
import Seo from "../components/seo"
import Link from "next/link";

// import "../styles/investment.scss"
export default function Investment() {
    return (
      <Layout>
        <Seo title="Your Investment With Us | 4 Eyes Photography" description="Your investment." />
        <div id="banner-559">
          <div className="cs-container">
            <span className="cs-int-topper">The 4Eyes Photography Experience</span>
            <span className="cs-int-title">Your Investment</span>
            <div className="cs-breadcrumbs">
              <a href="/" className="cs-link">Home</a>
              <a href="/investment" className="cs-link cs-active">Investment</a>
            </div>
          </div>
          {/*Background Image*/}
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2022/03/Banff-Calgary-Wedding-Photographers-7.jpg
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2022/03/Banff-Calgary-Wedding-Photographers-7.jpg
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/03/Banff-Calgary-Wedding-Photographers-7.jpg" alt="about 4 eyes photography" width={1280} height={568} aria-hidden="true" />
          </picture>
        </div>
        {/* ============================================ */}
        {/*                Side By Side                  */}
        {/* ============================================ */}
        <section id="sbs-1073">
          <div className="cs-container">
            <div className="cs-image-group">
              {/*Top left image*/}
              <picture className="cs-picture cs-picture1">
                {/*Mobile Image*/}
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2023/06/Banff-Wedding-Photographers.JPG
          " />
                {/*Tablet and above Image*/}
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2023/06/Banff-Wedding-Photographers.JPG
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/06/Banff-Wedding-Photographers.JPG" alt="calgary wedding photography prices" width={217} height={440} />
              </picture>
              {/*Middle image*/}
              <picture className="cs-picture cs-picture2">
                {/*Mobile Image*/}
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2023/07/Calgary-Wedding-Reception-1.JPG
          " />
                {/*Tablet and above Image*/}
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2023/07/Calgary-Wedding-Reception-1.JPG
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/07/Calgary-Wedding-Reception-1.JPG" alt="wedding photography pricing" width={305} height={600} />
              </picture>
              {/*Bottom right image*/}
              <picture className="cs-picture cs-picture3">
                {/*Mobile Image*/}
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2023/07/Calgary-Wedding-Dance-Floor-3.JPG
          " />
                {/*Tablet and above Image*/}
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2023/07/Calgary-Wedding-Dance-Floor-3.JPG
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/07/Calgary-Wedding-Dance-Floor-3.JPG" alt="wedding photography pricing" width={216} height={440} />
              </picture>
              {/*Stripe background*/}
              <img className="cs-stripes" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/stripes.svg" alt="stripes" width={509} height={535} aria-hidden="true" />
            </div>
            <div className="cs-content">
              <span className="cs-topper">4Eyes Photography</span>
              <h2 className="cs-title">Your Investment in us</h2>
              <p className="cs-text">What sets us apart is our dedication to crafting unforgettable memories in unique and awe-inspiring locations. We don't just photograph weddings; we embark on adventures with our couples, scaling mountains and traversing valleys to capture images that are as extraordinary as your love story.</p>
              <p className="cs-text">At <Link href="/">4Eyes Photography</Link>, we understand that every couple is unique, and so are their wedding photography needs. That's why we offer custom packages tailored to your vision and budget. From intimate elopements to grand celebrations, we work closely with you to ensure every detail is perfect.</p>
              <p className="cs-text">We welcome the opportunity to discuss your dream photo session further. Whether you envision a romantic <Link href="/">mountain elopement</Link> or a whimsical <Link href="/engagement">engagement</Link> shoot, let's start the conversation. Our flexibility knows no bounds, and we're committed to creating a package that exceeds your expectations.
              </p>
              <ul className="cs-list">
                <li className="cs-li">With years of experience capturing love stories in Alberta's most stunning locations, we bring a level of expertise and artistry that sets us apart.</li>
                <li className="cs-li">
                  We believe in personalized service, offering custom packages tailored to your unique vision and budget.
                </li>
                <li className="cs-li">
                  Your satisfaction is our priority, and we're dedicated to accommodating your needs and preferences every step of the way.
                </li>
                <li className="cs-li">From the initial consultation to the final delivery of your photos, we're committed to providing exceptional service and ensuring your experience with us is nothing short of extraordinary.</li>
              </ul></div>
          </div>
        </section>
        {/* ============================================ */}
        {/*                  Services                    */}
        {/* ============================================ */}
        <section id="services-280">
          <div className="cs-container">
            <div className="cs-content">
              <span className="cs-topper">looking for something special?</span>
              <h2 className="cs-title">Wedding Photography Packages</h2>
            </div>
            <ul className="cs-card-group">
              <li className="cs-item">
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2023/08/Wedding-at-Lake-Louise-Banff-10.JPG" />
                  <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2023/08/Wedding-at-Lake-Louise-Banff-10.JPG" />
                  <img aria-hidden="true" loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/08/Wedding-at-Lake-Louise-Banff-10.JPG" alt="wedding photography pricing" width={482} height={332} />
                </picture>
                <h3 className="cs-h3">Weddings</h3>
                <p className="cs-card-text">
                  As storytellers, we enjoy every single moment while shooting one of the most beautiful days in your life. <br /><br /> Being aware of your special day's sentimental meaning, we always photograph together to ensure we do not miss any gorgeous moments during your wedding day. <br /><br /> Engagement and/or after - wedding adventure photo session is included in some of our wedding packages. <br /><br /> Starting at $3800
                </p>
                <a href="/contact" className="cs-link">Contact us
                  {/* SVG Arrow*/}
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none"><g clipPath="url(#a)"><path d="M4.167 10.833h9.308L9.408 14.9a.84.84 0 0 0 0 1.183.83.83 0 0 0 1.175 0l5.492-5.491a.83.83 0 0 0 0-1.175l-5.483-5.5a.83.83 0 1 0-1.175 1.175l4.058 4.075H4.167a.836.836 0 0 0-.834.833c0 .458.375.833.834.833Z" fill="#1A1A1A" /></g><defs><clipPath id="a-280-280"><path fill="#fff" d="M0 0h20v20H0z" /></clipPath></defs></svg>
                </a>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2024/04/Emerald-Lake-Elopement-Photography-2.JPG" />
                  <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2024/04/Emerald-Lake-Elopement-Photography-2.JPG" />
                  <img aria-hidden="true" loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/04/Emerald-Lake-Elopement-Photography-2.JPG" alt="elopement wedding photography pricing" width={482} height={332} />
                </picture>
                <h3 className="cs-h3">Elopements</h3>
                <p className="cs-card-text">
                  Perhaps you and your partner are crazy romantic types looking to elope at the location surrounded by beautiful scenery at the lake?<br /><br />Maybe you are a spontaneous and fearless couple willing to exchange vows on the peak of the mountain?<br /><br />If this is what you would like to experience, we are the right photographers for you.<br /><br />Elopement packages are always fully customized. <br /><br />Starting at $2500
                </p>
                <a href className="cs-link">Contact us
                  {/* SVG Arrow*/}
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none"><g clipPath="url(#a)"><path d="M4.167 10.833h9.308L9.408 14.9a.84.84 0 0 0 0 1.183.83.83 0 0 0 1.175 0l5.492-5.491a.83.83 0 0 0 0-1.175l-5.483-5.5a.83.83 0 1 0-1.175 1.175l4.058 4.075H4.167a.836.836 0 0 0-.834.833c0 .458.375.833.834.833Z" fill="#1A1A1A" /></g><defs><clipPath id="a-280-280"><path fill="#fff" d="M0 0h20v20H0z" /></clipPath></defs></svg>
                </a>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2023/01/Adventure-Hiking-Elopement-Banff.jpg" />
                  <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2023/01/Adventure-Hiking-Elopement-Banff.jpg" />
                  <img aria-hidden="true" loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/01/Adventure-Hiking-Elopement-Banff.jpg" alt="adventure wedding photography pricing" width={482} height={332} />
                </picture>
                <h3 className="cs-h3">Adventure Sessions</h3>
                <p className="cs-card-text">
                  Engagement sessions are just a perfect option for those who would like to keep in the frame the beginning of their journey together. It is also an excellent opportunity to get used to being in front of the camera before a wedding day.<br /><br />After wedding photo session is a great choice for couples, who do not want to feel rush on their wedding day. We can shoot in a relaxing vibe surrounded by the Canadian Rockies or any other dreamy location.<br /><br />Starting at $900
                </p>
                <a href className="cs-link">Contact us
                  {/* SVG Arrow*/}
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none"><g clipPath="url(#a)"><path d="M4.167 10.833h9.308L9.408 14.9a.84.84 0 0 0 0 1.183.83.83 0 0 0 1.175 0l5.492-5.491a.83.83 0 0 0 0-1.175l-5.483-5.5a.83.83 0 1 0-1.175 1.175l4.058 4.075H4.167a.836.836 0 0 0-.834.833c0 .458.375.833.834.833Z" fill="#1A1A1A" /></g><defs><clipPath id="a-280-280"><path fill="#fff" d="M0 0h20v20H0z" /></clipPath></defs></svg>
                </a>
              </li>
              <li className="cs-item">
                <picture className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2020/10/zdjecieglowne-3.jpg" />
                  <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2020/10/zdjecieglowne-3.jpg" />
                  <img aria-hidden="true" loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/10/zdjecieglowne-3.jpg" alt="destination wedding photography pricing" width={482} height={332} />
                </picture>
                <h3 className="cs-h3">Destination Weddings</h3>
                <p className="cs-card-text">No matter if you are getting married in the Canadian Rockies, east coast, in the US, Europe or at the Caribbean Sea, we would be there for you. <br /><br /> Anywhere, anytime. <br /><br /> Contact us to learn more about our destination wedding photography pricing packages.</p>
                <a href className="cs-link">Contact us
                  {/* SVG Arrow*/}
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none"><g clipPath="url(#a)"><path d="M4.167 10.833h9.308L9.408 14.9a.84.84 0 0 0 0 1.183.83.83 0 0 0 1.175 0l5.492-5.491a.83.83 0 0 0 0-1.175l-5.483-5.5a.83.83 0 1 0-1.175 1.175l4.058 4.075H4.167a.836.836 0 0 0-.834.833c0 .458.375.833.834.833Z" fill="#1A1A1A" /></g><defs><clipPath id="a-280-280"><path fill="#fff" d="M0 0h20v20H0z" /></clipPath></defs></svg>
                </a>
              </li>
            </ul>
          </div>
        </section>
        {/* ============================================ */}
        {/*                 Why Choose Us                */}
        {/* ============================================ */}
        <section id="why-choose-1710">
          <div className="cs-container">
            <div className="cs-content">
              <span className="cs-topper">BUT WAIT... There's more...</span>
              <h2 className="cs-title">Every wedding package includes</h2>
            </div>
            <div className="cs-wrapper">
              <ul className="cs-card-group">
                <li className="cs-item">
                  <span className="cs-item-number">01</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">
                      Two creative. professional photographers,
                    </h3>
                  </div>
                </li>
                <li className="cs-item">
                  <span className="cs-item-number">02</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">
                      Private, online Art Gallery,
                    </h3>
                  </div>
                </li>
                <li className="cs-item">
                  <span className="cs-item-number">03</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">
                      Printing rights for personal use,
                    </h3>
                  </div>
                </li>
                <li className="cs-item">
                  <span className="cs-item-number">04</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">
                      Fully and professionally edited images,
                    </h3>
                  </div>
                </li>
              </ul>
              <ul className="cs-card-group">
                <li className="cs-item">
                  <span className="cs-item-number">05</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">
                      Web-size and high-res digital downloads,
                    </h3>
                  </div>
                </li>
                <li className="cs-item">
                  <span className="cs-item-number">06</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">
                      Slideshow to share with your family and friends,
                    </h3>
                  </div>
                </li>
                <li className="cs-item">
                  <span className="cs-item-number">07</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">
                      Required park permits + licenses
                    </h3>
                  </div>
                </li>
                <li className="cs-item">
                  <span className="cs-item-number">08</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">
                      No extra travel fees for Banff National Park, Kananaskis Country, Canmore, or the Calgary area,
                    </h3>
                  </div>
                </li>
                <li className="cs-item">
                  <span className="cs-item-number">09</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">
                      Possibility to order high-quality printed goods from fine art prints,matted frames, to calendars and metal prints
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            {/*-SVG Graphic*/}
            <img className="cs-floater" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/diagnol-ovals.svg" alt="graphic" loading="lazy" decoding="async" height={710} aria-hidden="true" width={690} />
          </div>
          <picture className="cs-picture">
            <source media="(min-width: 1024px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-Wedding-Photography-Ceremony-10.jpg" />
            <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-Wedding-Photography-Ceremony-10.jpg" />
            <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-Wedding-Photography-Ceremony-10.jpg" />
            <img aria-hidden="true" loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-Wedding-Photography-Ceremony-10.jpg" alt="wedding photography packages" width={1280} height={620} />
          </picture>
        </section>
        <Form />
      </Layout>
    );
  }