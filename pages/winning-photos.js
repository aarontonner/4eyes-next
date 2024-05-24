import Layout from "../components/layout"
import Seo from "../components/seo"
export default function WinningPhotos() {
    return (
      <Layout>
        <Seo title="Our Award Winning Portfolio | 4 Eyes Portfolio" description="Experience the artistry and creativity that defines our award-winning
  photography portfolio." />
        <div id="banner-559">
          <div className="cs-container">
            <span className="cs-int-topper">Excellence in Photography</span>
            <span className="cs-int-title">Award Winning Portfolio</span>
            <div className="cs-breadcrumbs">
              <a href="/" className="cs-link">Home</a>
              <a href="/winning-photos" className="cs-link cs-active">Award Winning Portfolio</a>
            </div>
          </div>
          {/*Background Image*/}
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2022/07/Banff-Award-Winning-Photo.jpg
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2022/07/Banff-Award-Winning-Photo.jpg
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/07/Banff-Award-Winning-Photo.jpg" alt="award winning wedding photography portfolio" width={1280} height={568} aria-hidden="true" />
          </picture></div>
        <section id="content-1450">
          <div className="cs-container">
            <div className="cs-content">
              <span className="cs-topper">award winning wedding photos</span>
              <h2 className="cs-title">Experience the artistry</h2>
              <p className="cs-text">
                4Eyes Photography is a proud member of MyWed, WPJA, Wedding Maps, Flash
                Masters, and Fearless Photographers. WPJA, MyWed, Fearless
                Photographers, Flash Masters, and Wedding Maps are prestigious
                associations for most artistic and creative photographers worldwide.
                WPJA, My Wed, Wedding Maps, Flash Maters, and Fearless Photographers
                host wedding photography contests, awarding only the best and most
                engaging photographs. 4Eyes Photography’s talented team has been awarded
                for outstanding wedding photography in many contests organized by these
                renowned organizations. We have been named 2023 Best Fine Art Outdoor
                Wedding Photographer by Global Wedding Awards, and 2022 Top 25 Best
                Wedding Photographers in the world by Wedding Photojournalist
                Association. Also, we are currently ranked #1 Wedding Photographer in
                Calgary (Wedding Photojournalist Association), and Top 3 Best Wedding
                Photographers in Canada (MyWed). 4Eyes Photography images that were
                recognized and awarded in reputable competitions:
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
                <picture onclick="openModal();currentSlide(1)" className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/Calgary-Wedding-Photography-Award-Winning-Photo.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/Calgary-Wedding-Photography-Award-Winning-Photo.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/Calgary-Wedding-Photography-Award-Winning-Photo.jpg" alt="award winning wedding photo" width={600} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              <li className="cs-item">
                <picture onclick="openModal();currentSlide(2)" className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/best-wedding-photographer-canada.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/best-wedding-photographer-canada.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/best-wedding-photographer-canada.jpg" alt="award winning wedding photo" width={600} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              <li className="cs-item">
                <picture onclick="openModal();currentSlide(3)" className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/photo-of-the-week-fearless-photographers.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/photo-of-the-week-fearless-photographers.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/photo-of-the-week-fearless-photographers.jpg" alt="award winning wedding portrait" width={600} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              <li className="cs-item">
                <picture onclick="openModal();currentSlide(4)" className="cs-picture">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/fearless-photographers-award.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2019/01/fearless-photographers-award.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/fearless-photographers-award.jpg" alt="award winning wedding portrait" width={600} height={400} aria-hidden="true" loading="lazy" />
                </picture>
              </li>
              {/* The Modal/Lightbox */}
              <div id="myModal" className="modal">
                <span className="close cursor" onclick="closeModal()">×</span>
                <div className="modal-content">
                  <div className="mySlides">
                    <div className="numbertext">1 / 4</div>
                    <img src="https://4eyesphotography.ca/wp-content/uploads/2019/01/Calgary-Wedding-Photography-Award-Winning-Photo.jpg" style={{width: '100%'}} />
                  </div>
                  <div className="mySlides">
                    <div className="numbertext">2 / 4</div>
                    <img src="https://4eyesphotography.ca/wp-content/uploads/2019/01/best-wedding-photographer-canada.jpg" style={{width: '100%'}} />
                  </div>
                  <div className="mySlides">
                    <div className="numbertext">3 / 4</div>
                    <img src="https://4eyesphotography.ca/wp-content/uploads/2019/01/photo-of-the-week-fearless-photographers.jpg" style={{width: '100%'}} />
                  </div>
                  <div className="mySlides">
                    <div className="numbertext">4 / 4</div>
                    <img src="https://4eyesphotography.ca/wp-content/uploads/2019/01/photo-of-the-week-fearless-photographers.jpg" style={{width: '100%'}} />
                  </div>
                  {/* Next/previous controls */}
                  <a className="prev" onclick="plusSlides(-1)">❮</a>
                  <a className="next" onclick="plusSlides(1)">❯</a>
                </div>
              </div>
            </ul>
          </div>
        </section>
      </Layout>
    );
  }