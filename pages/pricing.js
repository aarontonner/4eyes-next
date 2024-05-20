import Layout from "../components/layout";
import Seo from "../components/seo"
// import "../styles/pricing.scss"
export default function Pricing() {
    return (
      <Layout>
        <Seo title="Wedding Photography Pricing | 4 Eyes Photography" description="View our pricing here." />
        <div id="banner-559">
          <div className="cs-container">
            <span className="cs-int-topper">welcome to 4 eyes photography</span>
            <span className="cs-int-title">All Pricing Packages</span>
            <div className="cs-breadcrumbs">
              <a href="/" className="cs-link">Home</a>
              <a href="/investment" className="cs-link cs-active">Pricing</a>
            </div>
          </div>
          {/*Background Image*/}
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-best-wedding-winning-photo-2.jpg
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-best-wedding-winning-photo-2.jpg
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-best-wedding-winning-photo-2.jpg" alt="pricing" width={1280} height={568} aria-hidden="true" />
          </picture>
        </div>
        {/* ============================================ */}
        {/*                 Why Choose Us                */}
        {/* ============================================ */}
        <section id="why-choose-1710">
          <div className="cs-container">
            <div className="cs-content">
               <span className="cs-topper">BUT WAIT... There's more...</span> 
              <h2 className="cs-title">wedding package inclusives</h2>
            </div>
            <div className="cs-wrapper">
              <ul className="cs-card-group">
                <li className="cs-item">
                  <span className="cs-item-number">01</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">Two creative. professional photographers,</h3>
                  </div>
                </li>
                <li className="cs-item">
                  <span className="cs-item-number">02</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">Private, online Art Gallery,</h3>
                  </div>
                </li>
                <li className="cs-item">
                  <span className="cs-item-number">03</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">Printing rights for personal use,</h3>
                  </div>
                </li>
                <li className="cs-item">
                  <span className="cs-item-number">04</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">Fully and professionally edited images,</h3>
                  </div>
                </li>
              </ul>
              <ul className="cs-card-group">
                <li className="cs-item">
                  <span className="cs-item-number">05</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">Web-size and high-res digital downloads,</h3>
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
                    <h3 className="cs-h3">Required park permits + licenses</h3>
                  </div>
                </li>
                <li className="cs-item">
                  <span className="cs-item-number">08</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">
                      No extra travel fees for Banff National Park, Kananaskis Country,
                      Canmore, or the Calgary area,
                    </h3>
                  </div>
                </li>
                <li className="cs-item">
                  <span className="cs-item-number">09</span>
                  <div className="cs-item-wrapper">
                    <h3 className="cs-h3">
                      Possibility to order high-quality printed goods from fine art
                      prints,matted frames, to calendars and metal prints
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            {/*-SVG Graphic*/}
            <img className="cs-floater" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/diagnol-ovals.svg" alt="graphic" loading="lazy" decoding="async" height={710} aria-hidden="true" width={690} />
          </div>
          <picture className="cs-picture">
            <source media="(min-width: 1024px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-Wedding-Photography-Ceremony-10.jpg
      " />
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-Wedding-Photography-Ceremony-10.jpg
      " />
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-Wedding-Photography-Ceremony-10.jpg
      " />
            <img aria-hidden="true" loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-Wedding-Photography-Ceremony-10.jpg" alt="wedding photography packages" width={1280} height={620} />
          </picture>
        </section>
        {/* ============================================ */}
        {/*                   Pricing                    */}
        {/* ============================================ */}
        <section id="pricing-1769">
          <div className="cs-container">
            <div className="cs-content">
              <span className="cs-topper">Pricing</span>
              <h2 className="cs-title">Wedding Pricing Packages</h2>
            </div>
            <ul className="cs-card-group">
              <li className="cs-item">
                <span className="cs-package">Starting at $4500</span>
                <div className="cs-wrapper">
                  <span className="cs-price">Bronze Wedding</span>
                </div>
                <ul className="cs-ul">
                  <li className="cs-li">
                    <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-check.svg" alt="checkmark" width={18} height={18} />
                    Up to 8 hours of photography coverage by Eliza and Lukas
                  </li>
                  <li className="cs-li">
                    <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-check.svg" alt="checkmark" width={18} height={18} />
                    Engagement or after-wedding session included (1 location in Banff or
                    Calgary area)
                  </li>
                  <li className="cs-li">
                    <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-check.svg" alt="checkmark" width={18} height={18} />
                    Approximately 400 fully and professionally edited images, depending
                    on the nature of your celebration
                  </li>
                </ul>
                <a href="/contact" className="cs-button-solid cs-price-button">Contact us</a>
              </li>
              <li className="cs-item cs-popular">
                <span className="cs-package">Starting At $5500 (strongly recommended)</span>
                <div className="cs-wrapper">
                  <span className="cs-price">Silver Wedding</span>
                </div>
                <ul className="cs-ul">
                  <li className="cs-li">
                    <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-check.svg" alt="checkmark" width={18} height={18} />
                    Full day (up to 12 hours) of photography coverage by Eliza and Lukas
                  </li>
                  <li className="cs-li">
                    <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-check.svg" alt="checkmark" width={18} height={18} />
                    Engagement or after-wedding session included (1 location in Banff or
                    Calgary area)
                  </li>
                  <li className="cs-li">
                    <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-check.svg" alt="checkmark" width={18} height={18} />
                    Approximately 600 fully and professionally edited images, depending
                    on the nature of your celebration
                  </li>
                </ul>
                <a href="/contact" className="cs-button-solid cs-price-button">Contact us</a>
              </li>
              <li className="cs-item">
                <span className="cs-package">starting at $8500</span>
                <div className="cs-wrapper">
                  <span className="cs-price">Gold Wedding</span>
                </div>
                <ul className="cs-ul">
                  <li className="cs-li">
                    <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-check.svg" alt="checkmark" width={18} height={18} />
                    Full day (up to 12 hours) of photography coverage by Eliza and Lukas
                  </li>
                  <li className="cs-li">
                    <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-check.svg" alt="checkmark" width={18} height={18} />
                    Engagement session included (1 location in Banff or Calgary area)
                  </li>
                  <li className="cs-li">
                    <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-check.svg" alt="checkmark" width={18} height={18} />
                    Adventure/ hiking after-wedding session in the Canadian Rockies (any
                    time after the wedding day, sunrise or sunset)
                  </li>
                  <li className="cs-li">
                    <img className="cs-icon" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-check.svg" alt="checkmark" width={18} height={18} />
                    Approximately 600 fully and professionally edited images, depending
                    on the nature of your celebration
                  </li>
                </ul>
                <a href="/contact" className="cs-button-solid cs-price-button">Contact us</a>
              </li>
            </ul>
          </div>
          {/* Background Image */}
          <picture className="cs-background">
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2021/10/Calgary-Wedding-Photographers.jpg
      " />
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2021/10/Calgary-Wedding-Photographers.jpg
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2021/10/Calgary-Wedding-Photographers.jpg" alt="pricing" width={2070} height={1380} aria-hidden="true" />
          </picture>
        </section>
        {/* ============================================ */}
        {/*                     CTA                      */}
        {/* ============================================ */}
        <section id="cta-1693">
          <div className="cs-container">
            <div className="cs-content">
              <h2 className="cs-title">
                We offer off-season pricing which is 20% off on every wedding package
                (Thanksgiving - May 15)!
              </h2>
              <a href="/contact" className="cs-button-solid">Get In Touch</a>
            </div>
          </div>
          <div className="cs-wrapper">
            <img className="cs-graphic cs-graphic-1" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/enterprise-logo.png" alt="logo" height={372} width={372} loading="lazy" decoding="async" />
            <img className="cs-graphic cs-graphic-2" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/enterprise-logo.png" alt="logo" height={372} width={372} loading="lazy" decoding="async" />
          </div>
        </section>
        {/* ============================================ */}
        {/*                    CTA                       */}
        {/* ============================================ */}
        <section id="cta-80">
          {/* Need this to create a stage for the stripes, and use overflow: hidden on this container so the stripes don't overlap the sections above and below #cta */}
          <div className="cs-stripes" />
          <div className="cs-container">
            {/* Left Section */}
            <div className="cs-content">
              <span className="cs-topper">elopement photography packages</span>
              <h2 className="cs-title">hiking adventure elopement photography</h2>
              <p className="cs-text">
                Starting at $3500 (depending on hike/ trail length and difficulty - this
                price covers up to 10km roundtrip, moderate trail.
              </p>
              <a className="cs-button-solid" aria-label="learn more about our programs" href="/contact">Contact Us</a>
            </div>
            {/* Right Section */}
            <picture className="cs-picture">
              <source media="(max-width: 600px)" srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2023/12/Banff-Elopement-Photography-9.JPG
        " />
              <source media="(min-width: 601px)" srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2023/12/Banff-Elopement-Photography-9.JPG
        " />
              <img aria-hidden="true" loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/12/Banff-Elopement-Photography-9.JPG" alt="eloped" width={457} height={632} />
            </picture>
          </div>
        </section>
        {/* ============================================ */}
        {/*                 Side By Side                 */}
        {/* ============================================ */}
        <section id="sbs-1461">
          <div className="cs-container">
            {/* Left Image Section */}
            <div className="cs-image-group">
              <picture className="cs-picture cs-picture1">
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2024/04/Elopement-Banff.JPG
          " />
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2024/04/Elopement-Banff.JPG
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/04/Elopement-Banff.JPG" alt="elopement" width={500} height={729} aria-hidden="true" />
              </picture>
            </div>
            {/* Right Content Section*/}
            <div className="cs-content">
              <span className="cs-topper">elopement photography packages</span>
              <h2 className="cs-title">elopement photography pricing</h2>
              <p className="cs-text">
                Perhaps you and your partner are crazy romantic types looking to elope
                at the location surrounded by beautiful scenery at the lake? Maybe you
                are a spontaneous and fearless couple willing to exchange vows at the
                peak of the mountain. If this is what you would like to experience, we
                are the right photographers for you.
              </p>
              <ul className="cs-ul">
                <li className="cs-li">
                  Up to 2 hours of photography coverage by Eliza and Lukas (additional
                  time: $400/ hour)
                </li>
                <li className="cs-li">Approximately 50 fully edited photos per hour</li>
                <li className="cs-li">Private, online Art Gallery</li>
                <li className="cs-li">Printing rights for personal use</li>
                <li className="cs-li">Fully and professionally edited images</li>
                <li className="cs-li">Web-size and high-res digital downloads</li>
                <li className="cs-li">Slideshow to share with your family and friends</li>
                <li className="cs-li">Required Park permits and licenses</li>
                <li className="cs-li">Location scouting/ suggestions</li>
                <li className="cs-li">Local vendor referrals</li>
                <li className="cs-li">
                  No extra travel fees for Banff National Park, Kananaskis Country,
                  Canmore, or the Calgary area
                </li>
                <li className="cs-li">
                  Possibility to order high-quality printed goods from fine art prints,
                  and matted frames, to calendars and metal prints
                </li>
                <li className="cs-li">
                  We offer off-season pricing which is 20% off on elopement coverage
                  (Thanksgiving - May 15)
                </li>
              </ul>
              <a href="/contact" className="cs-button-solid">Contact us</a>
            </div>
          </div>
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2023/12/Banff-Elopement-Photography.JPG
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2023/12/Banff-Elopement-Photography.JPG
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/12/Banff-Elopement-Photography.JPG" alt="elopement" width={1280} height={568} />
          </picture>
        </section>
        {/* ============================================ */}
        {/*              Side By Side Reverse            */}
        {/* ============================================ */}
        <section id="sbsr-1457">
          <div className="cs-container">
            {/* Left Image Section */}
            <div className="cs-image-group">
              <picture className="cs-picture cs-picture1">
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2020/12/Destination-Wedding-Photographers-Canada-1.jpg
          " />
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2020/12/Destination-Wedding-Photographers-Canada-1.jpg
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/12/Destination-Wedding-Photographers-Canada-1.jpg" alt="adventure" width={500} height={729} aria-hidden="true" />
              </picture>
            </div>
            {/* Right Content Section*/}
            <div className="cs-content">
              <span className="cs-topper">let's go on an adventure!</span>
              <h2 className="cs-title">destination wedding package</h2>
              <p className="cs-text">
                No matter if you are getting married in the Canadian Rockies, East
                Coast, in the US, Europe or in the Caribbean Sea, we will be there for
                you. Anywhere, anytime.
              </p>
              <ul className="cs-ul">
                <li className="cs-li">
                  $400/ hour (minimum 8 hours of coverage) plus travel and accommodation
                  expenses
                </li>
                <li className="cs-li">
                  Unlimited hours of photography coverage by Eliza and Lukas
                </li>
                <li className="cs-li">Approximately 50 fully edited photos per hour</li>
                <li className="cs-li">Private, online Art Gallery</li>
                <li className="cs-li">Printing rights for personal use</li>
                <li className="cs-li">Fully and professionally edited images</li>
                <li className="cs-li">Web-size and high-res digital downloads</li>
                <li className="cs-li">
                  Possibility to order high-quality printed goods from fine art prints,
                  and matted frames, to calendars and metal prints
                </li>
                <li className="cs-li">
                  Multi-day wedding rates available ($350/ hour with min 6 hours each
                  day)
                </li>
                <li className="cs-li">
                  We offer off-season pricing which is 20% off on elopement coverage
                  (Thanksgiving - May 15)
                </li>
              </ul>
              <a href="/contact" className="cs-button-solid">Contact</a>
            </div>
          </div>
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2020/10/zdjecieglowne-3.jpg
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2020/10/zdjecieglowne-3.jpg
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/10/zdjecieglowne-3.jpg" alt="travel" width={1280} height={568} />
          </picture>
        </section>
        {/* ============================================ */}
        {/*                    CTA                       */}
        {/* ============================================ */}
        <section id="cta-80">
          {/* Need this to create a stage for the stripes, and use overflow: hidden on this container so the stripes don't overlap the sections above and below #cta */}
          <div className="cs-stripes" />
          <div className="cs-container">
            {/* Left Section */}
            <div className="cs-content">
              <span className="cs-topper">engagement photography packages</span>
              <h2 className="cs-title">Adventure Engagement</h2>
              <p className="cs-text">
                Starting at $3500 - depending on hike/ trail length and difficulty. -
                this price covers up to 10km roundtrip, moderate trail
              </p>
              <a className="cs-button-solid" aria-label="learn more about our programs" href="/contact">Contact Us</a>
            </div>
            {/* Right Section */}
            <picture className="cs-picture">
              <source media="(max-width: 600px)" srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2024/05/Banff-Engagement-Photography-14.JPG
        " />
              <source media="(min-width: 601px)" srcSet="
          https://4eyesphotography.ca/wp-content/uploads/2024/05/Banff-Engagement-Photography-14.JPG
        " />
              <img aria-hidden="true" loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/05/Banff-Engagement-Photography-14.JPG" alt="enagement" width={457} height={632} />
            </picture>
          </div>
        </section>
        {/* ============================================ */}
        {/*                 Side By Side                 */}
        {/* ============================================ */}
        <section id="sbs-1461">
          <div className="cs-container">
            {/* Left Image Section */}
            <div className="cs-image-group">
              <picture className="cs-picture cs-picture1">
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2024/04/Elopement-Banff.JPG
          " />
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2024/04/Elopement-Banff.JPG
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/04/Elopement-Banff.JPG" alt="elopement" width={500} height={729} aria-hidden="true" />
              </picture>
            </div>
            {/* Right Content Section*/}
            <div className="cs-content">
              <span className="cs-topper">elopement photography packages</span>
              <h2 className="cs-title">engagement photography pricing</h2>
              <p className="cs-text">
                Engagement sessions are just a perfect option for those who would like
                to keep in the frame the beginning of their journey together. It is also
                an excellent opportunity to get used to being in front of the camera
                before a wedding day. After wedding photo session is a great choice for
                couples, who do not want to feel rushed on their wedding day. We can
                shoot in a relaxing vibe surrounded by the Canadian Rockies or any other
                dreamy location. These are our most popular locations in Banff and Yoho
                National Parks. However, we are open to any stunning spots that the
                Rocky Mountains offer. You can also customize/ mix and match all the
                locations.
              </p>
              <ul className="cs-ul">
                <li className="cs-li">
                  Banff or Calgary session - up to 1 hour - $900 (1 location)
                </li>
                <li className="cs-li">
                  Banff session – up to 2 hours - $1200 (2 locations)
                </li>
                <li className="cs-li">Lake Louise - up to 1 hour - - $1200</li>
                <li className="cs-li">Peyto Lake + Bow Lake – up to 3 hours- $1500</li>
                <li className="cs-li">
                  Moraine Lake – sunrise or sunset session- $2200 (commercial
                  transportation included)
                </li>
                <li className="cs-li">
                  Peyto Lake + Bow Lake + Takkakaw Falls – up to 5 hours - $2300
                </li>
                <li className="cs-li">
                  Lake Louise + Peyto Lake + Bow Lake – up to 5 hours - $2300
                </li>
                <li className="cs-li">Required Park permits and licenses</li>
                <li className="cs-li">Location scouting/ suggestions</li>
                <li className="cs-li">Local vendor referrals</li>
                <li className="cs-li">
                  No extra travel fees for Banff National Park, Kananaskis Country,
                  Canmore, or the Calgary area
                </li>
                <li className="cs-li">
                  Possibility to order high-quality printed goods from fine art prints,
                  and matted frames, to calendars and metal prints
                </li>
                <li className="cs-li">
                  We offer off-season pricing which is 20% off on elopement coverage
                  (Thanksgiving - May 15)
                </li>
              </ul>
              <a href="/contact" className="cs-button-solid">Contact us</a>
            </div>
          </div>
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2023/07/Banff-Engagement-Photographer-3.JPG
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2023/07/Banff-Engagement-Photographer-3.JPG
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/07/Banff-Engagement-Photographer-3.JPG" alt="engagement" width={1280} height={568} />
          </picture>
        </section>
        {/* ============================================ */}
        {/*                  Content                     */}
        {/* ============================================ */}
        <section id="content-1638">
          <div className="cs-container">
            <div className="cs-content">
              <div className="cs-flex">
                <span className="cs-topper">keeping it simple</span>
                <h2 className="cs-title">your photography session booking process</h2>
              </div>
              <div className="cs-flex">
                <p className="cs-text">
                  After choosing the offer which suits your needs and expectations, a
                  photography contract is prepared for you to read and sign. We ask for
                  a retainer of $1000 (wedding/elopement) or 50 % (engagement sessions)
                  to secure your date. The remaining balance should be paid one week
                  before your special day.
                </p>
                <a href="/contact" className="cs-button-solid">get started</a>
              </div>
            </div>
          </div>
        </section>
       
      </Layout>
    );
  }