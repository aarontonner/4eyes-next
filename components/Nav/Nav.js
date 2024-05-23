

export default function Nav() {
    return (
      <header id="cs-navigation">
        {/* <div className="cs-top-bar">
          <div className="cs-top-container">
            <div className="cs-top-contact">
              <a href="tel:403-483-1916" className="cs-top-link">
                <img className="cs-link-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/phone-stroke-white.svg" alt="call banff wedding photographer" width={16} height={16} aria-hidden="true" decoding="async" />
                Call us (403) 483-1916
              </a>
              <a href="https://www.google.com/maps/place/4Eyes+Photography/@51.2041043,-114.5066666,17z/data=!3m1!4b1!4m6!3m5!1s0x53713ff21233f119:0xbe78d47ab5f477cf!8m2!3d51.2041043!4d-114.5040917!16s%2Fg%2F11mv5rl61x?entry=ttu" target="_popup" className="cs-top-link">
                <img className="cs-link-icon" src="/assets/images/icons8-google.svg" alt="review banff wedding photographer" width={20} height={20} aria-hidden="true" decoding="async" />
                Google Reviews
              </a>
            </div>
            <div className="cs-top-social">
              <a href="https://www.facebook.com/4EyesWeddingPhotographer/" target="_popup" className="cs-social-link">
                <img className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/clock-stroke-white.svghttps://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-lgrey.svg" alt="logo" width={16} height={16} aria-hidden="true" decoding="async" />
              </a>
              <a href="https://www.instagram.com/4eyesphotography_/" target="_popup" className="cs-social-link">
                <img className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/clock-stroke-white.svghttps://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-lgrey.svg" alt="banff wedding photographer instagram" width={16} height={16} aria-hidden="true" decoding="async" /> </a><a href="https://www.google.com/maps/place/4Eyes+Photography/@51.2041043,-114.5066666,17z/data=!3m1!4b1!4m6!3m5!1s0x53713ff21233f119:0xbe78d47ab5f477cf!8m2!3d51.2041043!4d-114.5040917!16s%2Fg%2F11mv5rl61x?entry=ttu" target="_popup" className="cs-social-link">
                <img className="cs-social-icon" src="/assets/images/icons8-google.svg" alt="google banff wedding photography" width={16} height={16} aria-hidden="true" decoding="async" />
              </a>
              <a href="https://www.tiktok.com/@4eyesphotography" target="_popup" className="cs-social-link">
                <img className="cs-social-icon" src="/images/icons8-tiktok.svg" alt="banff wedding photographer tiktok" width={16} height={16} aria-hidden="true" decoding="async" />
              </a>
            </div>
          </div>
        </div> */}
        <div className="cs-container">
          {/*Nav Logo*/}
          <a href="/" className="cs-logo" aria-label="back to home">
            <img src="https://4eyesphotography.ca/wp-content/uploads/2022/11/4EyesPhotography_logo2021_RGB_LQ_darkBG.jpg" alt="wedding photographer logo" width={400} height={210} aria-hidden="true" decoding="async" />
          </a>
          {/*Navigation List*/}
          <nav className="cs-nav" role="navigation">
            {/*Mobile Nav Toggle*/}
            <button  className="cs-toggle" aria-label="mobile menu toggle">
              <div className="cs-box" aria-hidden="true">
                <span className="cs-line cs-line1" aria-hidden="true" />
                <span className="cs-line cs-line2" aria-hidden="true" />
                <span className="cs-line cs-line3" aria-hidden="true" />
              </div>
            </button>
            {/* We need a wrapper div so we can set a fixed height on the cs-ul in case the nav list gets too long from too many dropdowns being opened and needs to have an overflow scroll. This wrapper acts as the background so it can go the full height of the screen and not cut off any overflowing nav items while the cs-ul stops short of the bottom of the screen, which keeps all nav items in view no matter how mnay there are*/}
            <div className="cs-ul-wrapper">
              <ul id="cs-expanded" className="cs-ul" aria-expanded="false">
                {/*Copy and paste this cs-dropdown list item and replace any .cs-li with this cs-dropdown group to make a new dropdown and it will work*/}
                <li className="cs-li cs-dropdown" tabIndex={0}>
                  <span className="cs-li-link">
                    <a href="/portfolio" className="cs-li-link inline"> Portfolio </a>
                    <img className="cs-drop-icon inline" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/down-gold.svg" alt="dropdown icon" width={15} height={15} decoding="async" aria-hidden="true" />
                  </span>
                  <ul className="cs-drop-ul">
                    <li className="cs-drop-li">
                      <a href="/portraits" className="cs-li-link cs-drop-link">Portraits</a>
                    </li>
                    <li className="cs-drop-li">
                      <a href="/wedding" className="cs-li-link cs-drop-link">Wedding</a>
                    </li>
                    <li className="cs-drop-li">
                      <a href="/engagement" className="cs-li-link cs-drop-link">Engagement</a>
                    </li>
                    <li className="cs-drop-li">
                      <a href="/winning-photos" className="cs-li-link cs-drop-link">Winning Photos</a>
                    </li>
                  </ul>
                </li>
                <li className="cs-li cs-dropdown" tabIndex={0}>
                  <span className="cs-li-link">
                    Locations
                    <img className="cs-drop-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/down-gold.svg" alt="dropdown icon" width={15} height={15} decoding="async" aria-hidden="true" />
                  </span>
                  <ul className="cs-drop-ul">
                    <li className="cs-drop-li">
                      <a href="/locations/calgary-wedding-photographers" className="cs-li-link cs-drop-link">Calgary</a>
                    </li>
                  </ul>
                </li>
                <li className="cs-li cs-dropdown" tabIndex={0}>
                  <span className="cs-li-link">
                    Information
                    <img className="cs-drop-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/down-gold.svg" alt="dropdown icon" width={15} height={15} decoding="async" aria-hidden="true" />
                  </span>
                  <ul className="cs-drop-ul">
                    <li className="cs-drop-li">
                      <a href="/about" className="cs-li-link cs-drop-link">About</a>
                    </li>
                    <li className="cs-drop-li">
                      <a href="/investment" className="cs-li-link cs-drop-link">Investment</a>
                    </li>
                    <li className="cs-drop-li">
                      <a href="/testimonials" className="cs-li-link cs-drop-link">Testimonials</a>
                    </li>
                    <li className="cs-drop-li">
                      <a href="/faq" className="cs-li-link cs-drop-link">FAQ</a>
                    </li>
                    <li className="cs-drop-li">
                      <a href="/pricing" className="cs-li-link cs-drop-link">pricing (hidden)</a>
                    </li>
                  </ul>
                </li>
                <li className="cs-li">
                  <a href="/blog" className="cs-li-link"> Blog </a>
                </li>
                <li className="cs-li">
                  <a href="/contact" className="cs-li-link"> Contact </a>
                </li>
              </ul>
            </div>
            
          </nav>
          <a href="/contact" className="cs-button-solid cs-nav-button">contact us</a>
          <div className="cs-top-social">
              <a href="https://www.facebook.com/4EyesWeddingPhotographer/" target="_popup" className="cs-social-link">
                <img className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/clock-stroke-white.svghttps://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-lgrey.svg" alt="logo" width={16} height={16} aria-hidden="true" decoding="async" />
              </a>
              <a href="https://www.instagram.com/4eyesphotography_/" target="_popup" className="cs-social-link">
                <img className="cs-social-icon" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/clock-stroke-white.svghttps://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram-lgrey.svg" alt="banff wedding photographer instagram" width={16} height={16} aria-hidden="true" decoding="async" /> </a><a href="https://www.google.com/maps/place/4Eyes+Photography/@51.2041043,-114.5066666,17z/data=!3m1!4b1!4m6!3m5!1s0x53713ff21233f119:0xbe78d47ab5f477cf!8m2!3d51.2041043!4d-114.5040917!16s%2Fg%2F11mv5rl61x?entry=ttu" target="_popup" className="cs-social-link">
                <img className="cs-social-icon" src="/assets/images/icons8-google.svg" alt="google banff wedding photography" width={16} height={16} aria-hidden="true" decoding="async" />
              </a>
              <a href="https://www.tiktok.com/@4eyesphotography" target="_popup" className="cs-social-link">
                <img className="cs-social-icon" src="/images/icons8-tiktok.svg" alt="banff wedding photographer tiktok" width={16} height={16} aria-hidden="true" decoding="async" />
              </a>
            </div>
          {/*Dark Mode toggle, uncomment button code if you want to enable a dark mode toggle*/}
          {/* <button id="dark-mode-toggle" aria-label="dark mode toggle">
            <svg class="cs-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480" xml:space="preserve"><path d="M459.782 347.328c-4.288-5.28-11.488-7.232-17.824-4.96-17.76 6.368-37.024 9.632-57.312 9.632-97.056 0-176-78.976-176-176 0-58.4 28.832-112.768 77.12-145.472 5.472-3.712 8.096-10.4 6.624-16.832S285.638 2.4 279.078 1.44C271.59.352 264.134 0 256.646 0c-132.352 0-240 107.648-240 240s107.648 240 240 240c84 0 160.416-42.688 204.352-114.176 3.552-5.792 3.04-13.184-1.216-18.496z"/></svg>
            <img class="cs-sun" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fsun.svg" decoding="async" alt="moon" width="15" height="15">
        </button> */}
        </div>
      </header>
    );
  }
