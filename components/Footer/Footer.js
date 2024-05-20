export default function Footer() {
    return (

      <footer id="footer">
        <div className="container">
          <div className="left-section">
            <a className="logo" href="/"><img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/11/4EyesPhotography_logo2021_RGB_LQ_darkBG.jpg" alt="wedding photographer logo" width={264} height={78} /></a>
            <p>
              Welcome to 4Eyes Photography with Eliza and Lukas – your Banff Wedding
              Photography team that specializes in luxury weddings and small mountain
              elopements. We also offer engagement sessions in Banff, Lake Louise,
              Calgary, Canmore, and beyond. As storytellers, we observe, see, and
              capture what is around us. We feel sentimental about people, the real
              connections between them, love, family, and the most important times in
              their lives. This is the reason why we enjoy documenting authentic
              emotions like joy or tears of happiness. There is nothing more beautiful
              when it comes to photography than having a chance to keep in the frame
              all special moments of people’s lives, which means a lot despite the
              passing of time.
            </p>
          </div>
          <div className="right-section">
            <div className="lists">
              <ul>
                <li>
                  <h2>Links</h2>
                </li>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li><li>
                  <a href="/testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
              <li>
                <h2>Contact</h2>
              </li>
              <li>
                <a href="/contact">
                 Cochrane, Alberta
                </a>
              </li>
              <li>
                <a href="tel:403-483-1916">
                  (403) 483-1916
                </a>
              </li>
              <li>
                <a href="mailto:info@4eyesphotography.ca">Click to Email</a>
              </li>
            </div>
          </div>
        </div>
        <div className="credit">
          <span>Designed and Hand Coded by</span>
          <a href="https://www.aarontonner.com/" target="_blank" rel="noopener">Aaron Tonner Web Solutions</a>
          <span className="copyright"> Copyright 2024</span>
        </div>
      </footer>
    );
  }