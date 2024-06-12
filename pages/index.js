import Link from "next/link";
import HeroSlider from "../components/Hero/Hero";
import Hero from "../components/Hero/Hero";
import RecentPosts from "../components/RecentPosts/RecentPosts";
import Featured from "../components/featured/Featured";
import Layout from "../components/layout"
import Seo from "../components/seo"
import FullCta from "../components/FullCta/FullCta";
export default function Home(){
return (
      <Layout>
        <Seo title="Banff Wedding Photographers | 4 Eyes Photography" description="Your Banff Wedding Photographers! Welcome to 4Eyes Photography with Eliza and Lukas – your Banff Wedding Photography team." />
       <HeroSlider />
        {/* <section id="hero-1900">
          <div className="cs-container">
            <div className="cs-content">
              <div className="cs-flex">
                <span className="cs-topper">4 Eyes Photography</span>
                <h1 className="cs-title">Calgary and Banff Wedding Photograhpers</h1>
                <p className="cs-text">
                  Welcome to 4Eyes Photography with Eliza and Lukas – your Banff Wedding
                  Photography team that specializes in luxury weddings and small
                  mountain elopements. We also offer engagement sessions in Banff, Lake
                  Louise, Calgary, Canmore, and beyond.
                </p>
              </div>
            </div>
            <ul className="cs-card-group">
              <li className="cs-item">
                <a href="/contact" className="cs-link">
                  <h3 className="cs-h3">Weddings</h3>
                </a>
                <picture className="cs-item-background">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2020/12/Banff-Wedding-Photographers-6.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2020/12/Banff-Wedding-Photographers-6.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/12/Banff-Wedding-Photographers-6.jpg" alt="banff wedding photographers" width={413} height={374} aria-hidden="true" />
                </picture>
              </li>
              <li className="cs-item">
                <a href="/contact" className="cs-link">
                  <h3 className="cs-h3">Elopements</h3>
                </a>
                <picture className="cs-item-background">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2022/07/Moraine-Lake-Elopement-6.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2022/07/Moraine-Lake-Elopement-6.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/07/Moraine-Lake-Elopement-6.jpg" alt="elopement photography in moraine lake, ab" width={413} height={374} aria-hidden="true" />
                </picture>
              </li>
              <li className="cs-item">
                <a href="/contact" className="cs-link">
                  <h3 className="cs-h3">Adventure Sessions</h3>
                </a>
                <picture className="cs-item-background">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2022/09/Calgary-Wedding-Photographer-2.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2022/09/Calgary-Wedding-Photographer-2.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/09/Calgary-Wedding-Photographer-2.jpg" alt="adventure wedding photography in calgary" width={413} height={374} aria-hidden="true" />
                </picture>
              </li>
              <li className="cs-item">
                <a href="/contact" className="cs-link">
                  <h3 className="cs-h3">Destination Weddings</h3>
                </a>
                <picture className="cs-item-background">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2020/10/zdjecieglowne-3.jpg
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2020/10/zdjecieglowne-3.jpg
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/10/zdjecieglowne-3.jpg" alt="destination wedding photographer banff" width={413} height={374} aria-hidden="true" />
                </picture>
              </li>
              <li className="cs-item">
                <a href="/contact" className="cs-link">
                  <h3 className="cs-h3">Engagements</h3>
                </a>
                <picture className="cs-item-background">
                  <source media="(max-width: 600px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2024/04/Engagement-At-Moraine-Lake-7.JPG
            " />
                  <source media="(min-width: 601px)" srcSet="
              https://4eyesphotography.ca/wp-content/uploads/2024/04/Engagement-At-Moraine-Lake-7.JPG
            " />
                  <img decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/04/Engagement-At-Moraine-Lake-7.JPG" alt="engagement photography" width={413} height={374} aria-hidden="true" />
                </picture>
              </li>
            </ul>
          </div>
          <div className="cs-video-wrapper">
            <video loading="lazy" src="https://4eyesphotography.ca/wp-content/uploads/2022/03/Banff-and-Calgary-Wedding-Photographers.mp4" autoPlay="false" muted />
            
          </div>
          <img className="cs-graphic cs-light" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gym-video-dark-graphic.svg" alt="graphic" height={161} width={1920} loading="lazy" decoding="async" />
          <img className="cs-graphic cs-dark" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gym-video-dark-graphic-dark.svg" alt="graphic" height={161} width={1920} loading="lazy" decoding="async" />
        </section>  */}
<section id="sbsr-1279">
    <div class="cs-container">
        <picture class="cs-picture">
            
            <source media="(max-width: 600px)" srcset="https://4eyesphotography.ca/wp-content/uploads/2019/01/best-wedding-photographer-canada.jpg"/>
            
            <source media="(min-width: 601px)" srcset="https://4eyesphotography.ca/wp-content/uploads/2019/01/best-wedding-photographer-canada.jpg"/>
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/best-wedding-photographer-canada.jpg" alt="banff wedding photographer" width="738" height="598"/>
        </picture>
        <div class="cs-content">
            <div class="cs-flex">
                <span class="cs-topper">we'll be your favorite wedding guests!</span>
                <h2 class="cs-title">We love to be part of the action!</h2>
            </div>
            <p class="cs-text">
              It's always an absolute joy to be part of your special day. We always get told that we make what can be a very overwhelming day feel fun and stress-free. Whether it's being part of the action, or snapping dreamy mountain wedding photos, it's always highlight for <Link className="anchor" href="/about">us</Link>. </p>
            <a href="/contact" class="cs-button-solid">Contact us</a>
        </div>
    </div>
    <picture class="cs-background">
        
        
    </picture>
</section>
          <Featured />




<section id="sbs-1278">
    <div class="cs-container">
        <picture class="cs-picture">
            
            <source media="(max-width: 600px)" srcset="https://4eyesphotography.ca/wp-content/uploads/2019/01/award-winning-photographer-canadian-rockies.JPG"/>
           
            <source media="(min-width: 601px)" srcset="https://4eyesphotography.ca/wp-content/uploads/2019/01/award-winning-photographer-canadian-rockies.JPG"/>
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/award-winning-photographer-canadian-rockies.JPG" alt="wedding photography banff" width="738" height="598"/>
        </picture>
        <div class="cs-content">
            <div class="cs-flex">
                <span class="cs-topper">mountain adventures</span>
                <h2 class="cs-title">giving you the mountain photos of your dreams</h2>
            </div>
            <p class="cs-text">
              We always have so much fun spending time with our bride and groom to capture those bold and breathtaking <Link className="anchor" href="/wedding">wedding photos</Link> with the beautiful scenery of the Alberta Rockies. And yes... we spend just as much time obsessing over mountain ranges to shoot our next wedding photography session in as we do upgrading our camera gear!
            </p>
            <a href="/contact" class="cs-button-solid">contact us</a>
        </div>
    </div>
    <picture class="cs-background">
    
    </picture>
</section>
                                
   <FullCta />                                   

        {/* ============================================ */}
        {/*            Side by Side Reverse              */}
        {/* ============================================ */}
        <section id="sbs-r-1884">
          <div className="cs-container">
            <div className="cs-image-group">
              <picture className="cs-picture cs-picture-large">
                {/*Mobile Image*/}
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2019/01/best-banff-wedding-photo.JPG
          " />
                {/*Tablet and above Image*/}
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2019/01/best-banff-wedding-photo.JPG
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/best-banff-wedding-photo.JPG" alt="banff wedding photography" width={324} height={467} />
              </picture>
              <picture className="cs-picture cs-picture-small">
                {/*Mobile Image*/}
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2024/03/Hikinf-Adventure-Wedding-Banff-1.JPG
          " />
                {/*Tablet and above Image*/}
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2024/03/Hikinf-Adventure-Wedding-Banff-1.JPG
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/03/Hikinf-Adventure-Wedding-Banff-1.JPG" alt="hiking adventure wedding photography banff" width={324} height={467} />
              </picture>
              <img className="cs-graphic cs-brown" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/brown-lines-3.svg" alt="graphic" width={208} height={203} aria-hidden="true" />
              <img className="cs-graphic cs-dots" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/dot-group.svg" alt="graphic" width={137} height={112} aria-hidden="true" />
              <img className="cs-graphic cs-glitter" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/glitter.png" alt="graphic" width={508} height={491} aria-hidden="true" />
            </div>
            <div className="cs-content">
              <div className="cs-flex">
                <span className="cs-topper">About &amp; Awards</span>
                <h2 className="cs-title">About Your Banff Wedding Photographers</h2>
              </div>
              <p className="cs-text">
                As storytellers, we observe, see, and capture what is around us. We feel
                sentimental about people, the real connections between them, love,
                family, and the most important times in their lives. This is the reason
                why we enjoy documenting authentic emotions like joy or tears of
                happiness. There is nothing more beautiful when it comes to photography
                than having a chance to keep in the frame all special moments of
                people’s lives, which means a lot despite the passing of time.
              </p>
              <p className="cs-text">
                What sets us apart as <Link className="anchor" href="/about">Banff wedding photographers</Link> is our personalized
                approach and keen attention to detail. We believe in getting to know our
                couples, understanding their vision, and infusing our creativity and
                unique photography and editing style to surpass expectations. Whether
                it’s exchanging vows at a mountain peak or sharing intimate moments by a
                serene lake, we are there to turn your dreams into breathtaking reality.
                Our wedding couples often express how stress-free their experience is
                with us – we do our best to stay out of the way at the wedding while
                blending in seamlessly to get those emotional, close-up shots that
                capture the joy. When you choose 4Eyes Photography as your Banff wedding
                photograpers, you’re not just hiring camera-clickers – you’re welcoming
                storytellers who celebrate love in its purest form. Let us be a part of
                your journey, capturing moments that resonate for a lifetime and beyond.
                Review after review, our clients rave about the stunning <Link className="anchor" href="/portfolio">work we
                produce</Link>. From capturing bold and breathtaking images to guiding you to
                the most picturesque locations in Banff, <Link className="anchor" href="/locations/calgary-wedding-photographers">Calgary</Link>, <Link className="anchor" href="/locations/canmore-wedding-photographers">Canmore</Link>, <Link className="anchor" href="/locations/jasper-wedding-photographers">Jasper</Link>, <Link className="anchor" href="/locations/lake-louise-wedding-photographers">Lake Louise</Link>, and more, while enjoying a hike together,
                we are not just Banff wedding photographers; we are storytellers who
                weave magic into every frame.
              </p>
              <p className="cs-text">
                At 4Eyes Photography, we understand that your wedding day is one of the
                most important moments of your life. That’s why we blend professionalism
                with a warm, down-to-earth approach, ensuring that not only do we
                capture stunning images but also create an enjoyable and stress-free
                experience for you and your loved ones. We are often told by the bride
                and groom that we made what they thought was going to be a very
                stressful wedding day, one of full enjoyment and no stress.
              </p>
              <br />
              <h3 className="cs-italics">
                Best Fine Art Outdoor Wedding Photographer 2023 by Global Wedding Awards
                (LuxLife Magazine)
              </h3> <br />
              <a href="/contact" className="cs-button-solid">Contact Us</a>
            </div>
            <div className="cs-logos">
              <img className="cs-logo" src="https://4eyesphotography.ca/wp-content/uploads/2022/01/Calgary-Wedding-Photographers.jpg" alt="banff wedding photography award" width={420} height={58} loading="lazy" decoding="async" />
              <img className="cs-logo" src="https://4eyesphotography.ca/wp-content/uploads/2022/01/Banff-Wedding-Photography.jpg" alt="banff wedding photography award" width={420} height={58} loading="lazy" decoding="async" />
              <img className="cs-logo" src="https://4eyesphotography.ca/wp-content/uploads/2022/01/Calgary-Wedding-Photography.jpg" alt="banff wedding photography award" width={420} height={58} loading="lazy" decoding="async" />
              <img className="cs-logo" src="https://4eyesphotography.ca/wp-content/uploads/2022/01/Banff-Wedding-Photographers-1.jpg" alt="wedding photography banff award" width={420} height={58} loading="lazy" decoding="async" />
              <img className="cs-logo" src="https://4eyesphotography.ca/wp-content/uploads/2023/03/fm-member-mono-white.png" alt="bnaff photography flash master award" width={420} height={58} loading="lazy" decoding="async" />
              <img className="cs-logo" src="https://4eyesphotography.ca/wp-content/uploads/2023/03/wedding-maps-awards-768x512-1.png" alt="bnaff photography wedding maps award" width={420} height={58} loading="lazy" decoding="async" />
            </div>
          </div>
        </section>
        {/* ============================================ */}
        {/*                Side by Side                  */}
        {/* ============================================ */}
        <section id="sbs-1883">
          <div className="cs-container">
            <div className="cs-image-group">
              <picture className="cs-picture">
                {/*Mobile Image*/}
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-3.jpg" />
                {/*Tablet and above Image*/}
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-3.jpg" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-3.jpg" alt="banff wedding photographers" width={324} height={467} />
              </picture>
              <img className="cs-graphic cs-brown" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/brown-lines-2.svg" alt="graphic" width={208} height={203} aria-hidden="true" />
              <img className="cs-graphic cs-peach" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/ball.svg" alt="graphic" width={56} height={42} aria-hidden="true" />
              <img className="cs-graphic cs-beige" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/beige-blob.svg" alt="graphic" width={379} height={394} aria-hidden="true" />
              <img className="cs-graphic cs-leaf" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/leaf2.svg" alt="graphic" width={179} height={225} aria-hidden="true" />
              <img className="cs-graphic cs-lines" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/beige-lines.svg" alt="graphic" width={189} height={208} aria-hidden="true" />
              <div className="cs-info">
                <p className="cs-info-text">
                  TOP 25 International Wedding Photographers by Wedding Photojournalist Association
                </p>
              </div>
            </div>
            <div className="cs-content">
              <div className="cs-flex">
                <span className="cs-topper">Who we are</span>
                <h2 className="cs-title">Professional Banff Wedding Photographers</h2>
              </div>
              <p className="cs-text">
                With endless creativity and passion for <Link className="anchor" href="/portfolio">wedding photography</Link> in Banff, Eliza and Lukas will tell your love story through unique images that can be cherished forever. At 4Eyes Photography, we go beyond mere <Link className="anchor" href="/wedding">wedding</Link> and <Link className="anchor" href="/engagement">engagement</Link> photographs; we craft visual narratives that reflect the unique love stories of each couple against the stunning backdrop of Alberta's natural beauty. As experienced Banff wedding photographers, we understand the allure of this picturesque region and weave its charm seamlessly into every frame throughout the wedding photo shoots and meticulous editing. While Banff remains our heart and soul, our passion for capturing those wedding photos extend beyond borders. We believe in exploring new horizons, chasing sunsets in Calgary, embracing romance in Lake Louise, and discovering hidden gems in Canmore. Wherever your love story takes you, we'll be there to frame it beautifully as your professional Banff wedding photographers.          </p>
              <a href="/contact" className="cs-button-solid">Contact us</a>
            </div>
          </div>
        </section>
        {/* ============================================ */}
        {/*                    Quote                     */}
        {/* ============================================ */}
        <section id="quote-1891">
          <div className="cs-container">
            <div className="cs-item">
              <p className="cs-review">
                I would honestly recommend 4Eyes Photography to everyone! Not only are their photos absolutely incredible but they also ended up being some of my favorite wedding guests. They were a blast and made my awkward self feel like I was just hanging out with friends. If I could give a higher score than 5 stars I would!
              </p>
              <div className="cs-flex-group">
                <picture className="cs-picture">
                  <img className="cs-profile" src="http://www.4eyes.purpleparrotwebsites.com/wp-content/uploads/2024/06/Google-Maps.png" decoding="async" alt="wedding photo headshot" width={82} height={82} aria-hidden="true" loading="lazy" />
                </picture>
                <span className="cs-name">
                 Christina C.
                </span>
              </div>
              {/*Quote Icon*/}
              <img className="cs-quote" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/beige-quote.svg" decoding="async" alt="quote icon" width={86} height={72} />
            </div>
          </div>
          <picture className="cs-background">
            <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2023/02/Banff-Wedding-Photography-9-1.jpg" />
            <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2023/02/Banff-Wedding-Photography-9-1.jpg" />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/02/Banff-Wedding-Photography-9-1.jpg" alt="banff wedding photography review" width={630} height={877} />
          </picture>
        </section>
        {/* ============================================ */}
        {/*                 Why Choose Us                */}
        {/* ============================================ */}
        <section id="why-choose-682">
          <div className="cs-container">
            {/* Left Section */}
            <div className="cs-image-group">
              <picture className="cs-picture cs-picture1">
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/07/Moments-Banff-Wedding-Photographers-2.jpg" />
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/07/Moments-Banff-Wedding-Photographers-2.jpg" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/07/Moments-Banff-Wedding-Photographers-2.jpg" alt="banff wedding photography emotion" width={306} height={360} />
              </picture>
              <picture className="cs-picture cs-picture2">
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/07/Creative-Banff-Wedding-Photographers-1.jpg" />
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/07/Creative-Banff-Wedding-Photographers-1.jpg" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/07/Creative-Banff-Wedding-Photographers-1.jpg" alt="creative banff wedding photography" width={306} height={360} />
              </picture>
              <picture className="cs-picture cs-picture3">
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/08/Banff-Wedding_126.jpg" />
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/08/Banff-Wedding_126.jpg" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/08/Banff-Wedding_126.jpg" alt="banff wedding portraits" width={306} height={360} />
              </picture>
              <picture className="cs-picture cs-picture4">
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/07/Portraits-Banff-Wedding-Photography.jpg" />
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/07/Portraits-Banff-Wedding-Photography.jpg" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/07/Portraits-Banff-Wedding-Photography.jpg" alt="emotional banff wedding photography" width={306} height={360} />
              </picture>
              {/*Zig Zag Graphic*/}
              <img className="cs-graphic" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fzigzag.svg" loading="lazy" decoding="async" alt="zigzag" width={983} height={416} />
            </div>
            <div className="cs-content">
              <span className="cs-topper">4Eyes Does it Different</span>
              <h2 className="cs-title">You Deserve <span className="cs-color">The Best</span> Banff Wedding Photography</h2>
              
              <ul className="cs-ul">
                <li className="cs-li">
                  <h3 className="cs-h3">
                    We love expressing our creativity
                  </h3>
                  <p className="cs-item-text">
                    When we aren't snapping photos, or meticulously editing photos, we're brainstorming up new ideas to take our wedding photos to new heights.                  </p>
                </li>
                <li className="cs-li">
                  <h3 className="cs-h3">
                    Immersing ourselves to capture real emotions
                  </h3>
                  <p className="cs-item-text">
                    We immerse ourselves within your wedding day to capture those natural and wholesome momemnts, you'll think we're just another member of the audience!                  </p>
                </li>
                <li className="cs-li">
                  <h3 className="cs-h3">
                    We love taking portraits
                  </h3>
                  <p className="cs-item-text">
                    Getting real close up on those beautiful smiling faces to capture the raw beauty of the joy.                  </p>
                </li>
              </ul>
              <a className="cs-button-solid" href="/contact">Contact Us</a>
            </div>
          </div>
        </section>
        {/* ============================================ */}
        {/*                 Why Choose Us                */}
        {/* ============================================ */}
        <section id="why-choose-681">
          <div className="cs-container">
            {/* Left Section */}
            <div className="cs-image-group">
              <picture className="cs-picture cs-picture1">
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/07/Banff-Wedding-Photographers-1.jpg" />
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/07/Banff-Wedding-Photographers-1.jpg" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/07/Banff-Wedding-Photographers-1.jpg" alt="5 star banff wedding photography" width={306} height={360} />
              </picture>
              <picture className="cs-picture cs-picture2">
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-wedding-photography-award-winning-engagement-photo.jpg" />
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-wedding-photography-award-winning-engagement-photo.jpg" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-wedding-photography-award-winning-engagement-photo.jpg" alt="award winning banff engagement photo" width={306} height={360} />
              </picture>
              <picture className="cs-picture cs-picture3">
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/03/Banff-Calgary-Wedding-Photographers-7.jpg" />
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/03/Banff-Calgary-Wedding-Photographers-7.jpg" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/03/Banff-Calgary-Wedding-Photographers-7.jpg" alt="banff wedding photographer" width={306} height={360} />
              </picture>
              <picture className="cs-picture cs-picture4">
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2021/09/Bow-Valley-Ranche-Wedding-Calgary.jpg" />
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2021/09/Bow-Valley-Ranche-Wedding-Calgary.jpg" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2021/09/Bow-Valley-Ranche-Wedding-Calgary.jpg" alt="banff wedding photo" width={306} height={360} />
              </picture>
              {/*Zig Zag Graphic*/}
              <img className="cs-graphic" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fzigzag.svg" loading="lazy" decoding="async" alt="zigzag" width={983} height={416} />
            </div>
            <div className="cs-content">
              <span className="cs-topper">4Eyes Does it different</span>
              <h2 className="cs-title">Work with <span className="cs-color">Multi-Awarded</span> Wedding Photographers</h2>
              <ul className="cs-ul">
                <li className="cs-li">
                  <h3 className="cs-h3">
                    5 Star Client Reviews
                  </h3>
                  <p className="cs-item-text">We LOVE hearing from our bride and grooms, and we're often told that we fit into the wedding just as if we were your friends who want to enjoy the celebration!</p>
                </li>
                <li className="cs-li">
                  <h3 className="cs-h3">
                    Multi-Awarded Photographers
                  </h3>
                  <p className="cs-item-text">
                    At 4Eyes Photography, creativity is our driving force. When we're not behind the lens, we're brainstorming innovative ideas to elevate our wedding photography to new heights which is why we've earned multiple awards in the wedding photography industry!
                  </p>
                </li>
                <li className="cs-li">
                  <h3 className="cs-h3">
                    We Travel Everywhere
                  </h3>
                  <p className="cs-item-text">
                    We LOVE to travel and explore new places in and outside of Canada, so we are always on the lookout for a new special location to capture the love of our bride and groom.
                  </p>
                </li>
                <li className="cs-li">
                  <h3 className="cs-h3">
                    We Immerse Ourselves
                  </h3>
                  <p className="cs-item-text">
                    We immerse ourselves in your special day, seamlessly blending into the background to capture authentic emotions and candid moments
                  </p>
                </li>
              </ul>
              <a className="cs-button-solid" href="/contact">Contact Us</a>
            </div>
          </div>
        </section>
        {/* ============================================ */}
        {/*                 Why Choose Us                */}
        {/* ============================================ */}
        <section id="why-choose-683">
          <div className="cs-container">
            {/* Left Section */}
            <div className="cs-image-group">
              <picture className="cs-picture cs-picture1">
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2023/05/Feb23672_4Eyes_Winners_Badge.png" />
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2023/05/Feb23672_4Eyes_Winners_Badge.png" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/05/Feb23672_4Eyes_Winners_Badge.png" alt="banff wedding photography emotion" width={306} height={360} />
              </picture>
              <picture className="cs-picture cs-picture2">
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2023/02/Banff-wedding-photographer-top25-2022.png" />
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2023/02/Banff-wedding-photographer-top25-2022.png" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/02/Banff-wedding-photographer-top25-2022.png" alt="creative banff wedding photography" width={306} height={360} />
              </picture>
              <picture className="cs-picture cs-picture3">
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2024/05/Mar24307_4Eyes-Photography_LUXlife-Global-Wedding-Awards-2024-Winners-Badge.png" />
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2024/05/Mar24307_4Eyes-Photography_LUXlife-Global-Wedding-Awards-2024-Winners-Badge.png" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/05/Mar24307_4Eyes-Photography_LUXlife-Global-Wedding-Awards-2024-Winners-Badge.png" alt="banff wedding portraits" width={306} height={360} />
              </picture>
              <picture className="cs-picture cs-picture4">
                <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2024/05/Mar24167_4Eyes-Photography_AI-Business-Excellence-Awards-2024-Winners-Badge.png" />
                <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2024/05/Mar24167_4Eyes-Photography_AI-Business-Excellence-Awards-2024-Winners-Badge.png" />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/05/Mar24167_4Eyes-Photography_AI-Business-Excellence-Awards-2024-Winners-Badge.png" alt="emotional banff wedding photography" width={306} height={360} />
              </picture>
              {/*Zig Zag Graphic*/}
              <img className="cs-graphic" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fzigzag.svg" loading="lazy" decoding="async" alt="zigzag" width={983} height={416} />
            </div>
            <div className="cs-content">
              <span className="cs-topper">THE 4EYES PHOTOGRAPHY EXPERIENCE</span>
              <h2 className="cs-title">we're proud to show off <span className="cs-color">our accomplishments</span></h2>
            
              <ul className="cs-ul">
                <li className="cs-li">
                  <h3 className="cs-h3">
                    TOP 25 International Wedding Photographers by Wedding Photojournalist Association
                  </h3></li>
                <li className="cs-li">
                  <h3 className="cs-h3">
                    Best Fine Art Outdoor Wedding Photographer 2023 by Global Wedding Awards (LuxLife Magazine)
                  </h3></li>
                <li className="cs-li">
                  <h3 className="cs-h3">
                    Best Reportage Wedding Photograhper 2024 Western Canada by Luxlife Global Wedding Awards
                  </h3></li>
                <li className="cs-li">
                  <h3 className="cs-h3">
                    Most Trusted Wedding Photographer 2024 Canada by Business Excellence Awards
                  </h3></li>
              </ul>
              <a className="cs-button-solid" href="/contact">Contact Us</a>
            </div>
          </div>
        </section>              
        {/* ============================================ */}
        {/*                  Reviews                     */}
        {/* ============================================ */}
        <section id="reviews-707">
          <div className="cs-container">
            <div className="cs-content">
              <span className="cs-topper">Testimonials</span>
              <h2 className="cs-title">Our Clients <span className="cs-color">Rave About Their Photos</span></h2>
            </div>
            <div className="cs-flex-group">
              <div className="cs-review-group">
                <div className="cs-picture-group">
                  <picture className="cs-picture">
                    {/*Mobile Image*/}
                    <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2020/12/Portrait-Session-Banff-Wedding-Photographers-17.jpg" />
                    {/*Tablet and above Image*/}
                    <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2020/12/Portrait-Session-Banff-Wedding-Photographers-17.jpg" />
                    <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/12/Portrait-Session-Banff-Wedding-Photographers-17.jpg" alt="portrait wedding photography session" width={240} height={286} />
                  </picture>
                  {/*Quote Block*/}
                  <picture className="cs-wrapper">
                    <img className="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fpink-quote.svg" alt="spidey sense graphic" width={58} height={48} aria-hidden="true" />
                  </picture>
                </div>
                <div className="cs-review">
                  <p className="cs-review-text">
                    "Eliza &amp; Lukas were such a great couple to work with! We felt at ease with them and they made the post wedding photoshoot so much fun! We are absolutely in love with the photos we did in Banff and at Lake Minnewanka and Two Jack. Highly recommend this talented duo for your special day!"                  </p>
                  <span className="cs-name">Amelie Edmonstone</span>
                </div>
              </div>
              <div className="cs-review-group">
                <div className="cs-picture-group">
                  <picture className="cs-picture">
                    {/*Mobile Image*/}
                    <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/08/Banff-Wedding_135.jpg" />
                    {/*Tablet and above Image*/}
                    <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2022/08/Banff-Wedding_135.jpg" />
                    <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/08/Banff-Wedding_135.jpg" alt="banff wedding photograph in mountains" width={240} height={286} />
                  </picture>
                  {/*Quote Block*/}
                  <picture className="cs-wrapper">
                    <img className="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fpink-quote.svg" alt="spidey sense graphic" width={58} height={48} aria-hidden="true" />
                  </picture>
                </div>
                <div className="cs-review">
                  <p className="cs-review-text">
                    We had the absolute best time with Eliza &amp; Lukas, they made our after wedding photoshoot a memorable one. They were really informative &amp; knowledgeable about what they were doing. We book a 2hr session &amp; I was worried we'd feel rushed or not have enough time but they made it so relaxed &amp; comfortable that we never once felt rushed and enjoyed the whole experience. Eliza &amp; Lukas were such a fun down to earth couple to work with. We absolutely love every photo. Their experience really shined through &amp; we would recommend them over and over again!                  </p>
                  <span className="cs-name">Renajla Babic</span>
                </div>
              </div>
              <div className="cs-review-group">
                <div className="cs-picture-group">
                  <picture className="cs-picture">
                    {/*Mobile Image*/}
                    <source media="(max-width: 600px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-best-wedding-winning-photo-5.jpg" />
                    {/*Tablet and above Image*/}
                    <source media="(min-width: 601px)" srcSet="https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-best-wedding-winning-photo-5.jpg" />
                    <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2019/01/banff-best-wedding-winning-photo-5.jpg" alt="banff winning wedding photograph" width={240} height={286} />
                  </picture>
                  {/*Quote Block*/}
                  <picture className="cs-wrapper">
                    <img className="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fpink-quote.svg" alt="spidey sense graphic" width={58} height={48} aria-hidden="true" />
                  </picture>
                </div>
                <div className="cs-review">
                  <p className="cs-review-text">
                    We had lots of fun during our post-wedding photo session in Kananaskis Country with 4Eyes Photography. Despite being slightly disorganized and ended up meeting the team 45 minutes later than expected to chase the sunset Golden hour, both Lukas and Eliza got such amazing shots for our special shoot at not one, not two but THREE locations - one for photos with my late father's vehicle he gifted me, another at Wedge Pond, and third at the top of South Pocaterra ridge.</p>
                  <span className="cs-name">Evelyn and Michael</span>
                </div>
              </div>
            </div>
          </div>
          {/*Ripple Graphic*/}
          <picture className="cs-waves">
            {/*Mobile Image*/}
            <source media="(max-width: 1023px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fripple3-m.svg" />
            {/*Tablet and above Image*/}
            <source media="(min-width: 1024px)" srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fripple3.svg" />
            <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fripple3.svg" alt="person" width={566} height={309} />
          </picture>
        </section>
        
        
       
      </Layout>
    );
  }