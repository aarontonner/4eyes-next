import Link from "next/link";
import Form from "../components/Form/Form";
import Layout from "../components/layout";
import Seo from "../components/seo"
import Logos from "../components/Logos/Logos";
import SingleReview from "../components/SingleReview/SingleReview";
// import "../styles/about.scss"
// import "../styles/components.scss"

export default function About() {
    return (
      <Layout>
        <Seo title="About Us | 4 Eyes Photography" description="Welcome to 4Eyes Photography with Eliza and Lukas – your Banff Wedding Photography team that specializes in luxury weddings and small mountain elopements." />
        <div id="banner-559">
          <div className="cs-container">
            <span className="cs-int-topper">who is 4Eyes Photography?</span>
            <span className="cs-int-title">About Us</span>
            <div className="cs-breadcrumbs">
              <a href="/" className="cs-link">Home</a>
              <a href="/about" className="cs-link cs-active">About</a>
            </div>
          </div>
          {/*Background Image*/}
          <picture className="cs-background">
            {/*Mobile Image*/}
            <source media="(max-width: 600px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2024/05/about-4eyes.jpg
      " />
            {/*Tablet and above Image*/}
            <source media="(min-width: 601px)" srcSet="
        https://4eyesphotography.ca/wp-content/uploads/2024/05/about-4eyes.jpg
      " />
            <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/05/about-4eyes.jpg" alt="about 4 eyes photography" width={1280} height={568} aria-hidden="true" />
          </picture>
        </div>
        
        {/* ============================================ */}
        {/*                Side By Side                  */}
        {/* ============================================ */}
        <section id="sbs-1640">
          <div className="cs-container">
            <div className="cs-content">
              <span className="cs-topper">Eliza &amp; Lukas</span>
              <h2 className="cs-title">We are 4Eyes photography!</h2>
              <picture className="cs-picture">
                {/*Mobile Image*/}
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-3.jpg
          " />
                {/*Tablet and above Image*/}
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-3.jpg
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-3.jpg" alt="Eliza and Lukas" width={608} height={406} />
              </picture>
            </div>
            <div className="cs-stats-group">
              <p className="cs-text">
                Hi Guys! Eliza and Lukas here. Together we run 4Eyes Photography - a
                multi-awarded husband and wife team offering finest Wedding and
                Adventure Photography services in <Link className="anchor" href="/">Banff</Link>, <Link className="anchor" href="/locations/calgary-wedding-photographers">Calgary</Link>, <Link className="anchor" href="/locations/canmore-wedding-photographers">Canmore</Link>, <Link className="anchor" href="/locations/jasper-wedding-photographers">Jasper</Link>, <Link className="anchor" href="/locations/lake-louise-wedding-photographers">Lake Louise</Link>,
                Kananaskis and beyond.
              </p>
              <ul className="cs-stats">
                <li className="cs-stat">
                  <span className="cs-number">25+</span>
                  <span className="cs-desc">Award Winning Photos</span>
                </li>
                <li className="cs-stat">
                  <span className="cs-number">2K</span>
                  <span className="cs-desc">Happy Bride &amp; Grooms</span>
                </li>
                <li className="cs-stat">
                  <span className="cs-number">100%</span>
                  <span className="cs-desc">Customer Rating</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Logos />
        {/* ============================================ */}
        {/*              Side By Side Reverse            */}
        {/* ============================================ */}
        <section id="RTsbsr-1311">
          <div className="cs-container">
            {/* Left Image Section */}
            <div className="cs-image-group">
              {/*Floating Box*/}
              <div className="cs-box">
                <span className="cs-desc">The Caring Perfectionist</span>
              </div>
              {/*Image*/}
              <picture className="cs-picture">
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-1.jpg
          " />
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-1.jpg
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-1.jpg" alt="meeting" width={630} height={630} aria-hidden="true" />
              </picture>
            </div>
            {/* Right Content Section*/}
            <div className="cs-content">
              <span className="cs-topper">Photographer &amp; Editor</span>
              <h2 className="cs-title">Eliza | 4Eyes Photography</h2>
              <p className="cs-text">
                Eliza, my wife, my best friend, and an incredible photographer. Per what
                our friends say - the smarter and sexier part of our team. Well, I’m not
                gonna argue with that.
              </p>
              <p className="cs-text">
                I could write a hundred pages to describe Eliza as a human being.
                Hundred and a half to include her dark side as well, but I’m not gonna
                do it today. I will focus on what makes her the most amazing wife and
                ‘business partner’ in the world.
              </p>
              <p className="cs-text">
                She cares. She cares a lot. About me, our family and friends, our
                clients, and our craziest dog ever Duchess. She cares so much that we
                can book only a few destination weddings a year, as she doesn’t want to
                leave our puppy for too long… Yup, that’s her!
              </p>
              <p className="cs-text">
                Eliza never gives up. Absolutely never. Try to stop her when she pursues
                her goal. I remember her attitude back in the days when we were starting
                our photography business. In the beginning, our journey was not easy;
                Honestly, I had a few moments of doubts, but she didn’t. She didn’t give
                up. She is the reason why we have become successful as photographers.
              </p>
              <p className="cs-text">
                She also pays attention to every freaking detail. It drives me crazy
                sometimes. Who else would have cared if I had left my socks on the
                floor? Right... ? But when it comes to <Link className="anchor" href="/">wedding photography</Link>, especially the
                editing part - her obsession to details is priceless. She’s pure
                gold.<br />People love her, I love her, and you’re gonna love her too. -
                Lukas
              </p>
              <a className="cs-button-solid" aria-label="learn more about our programs" href="/contact">Contact</a>
            </div>
          </div>
        </section>
        {/* ============================================ */}
        {/*              Side By Side Triplet            */}
        {/* ============================================ */}
        <section id="RTsbst-1311">
          <div className="cs-container">
            {/* Left Image Section */}
            <div className="cs-image-group">
              {/*Floating Box*/}
              <div className="cs-box">
                <span className="cs-desc">The Untamed Visionary</span>
              </div>
              {/*Image*/}
              <picture className="cs-picture">
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-2.jpg
          " />
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-2.jpg
          " />
                <img loading="lazy" decoding="async" src=" https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-2.jpg" alt="meeting" width={630} height={630} aria-hidden="true" />
              </picture>
            </div>
            {/* Right Content Section*/}
            <div className="cs-content">
              <span className="cs-topper">Photographer &amp; Editor</span>
              <h2 className="cs-title">Lukas | 4Eyes Photography</h2>
              <p className="cs-text">
                Meet Lukas. I have been married to him for over 10 years. Oh, this
                man... He is the most adventurous person I have ever met, never afraid
                to face new challenges and speak out loud the truth... He lives his life
                in high-speed mode, with an open mind to new ideas and meeting
                interesting people. Crazy, fun, brave or ridiculous ideas? Yeap...
                always his ideas... It's never boring with Lukas.
              </p>
              <p className="cs-text">
                Photography is his love and passion. Trust me ... he opens his eyes in
                the morning with his joyful face and immediately starts talking about
                photography. Here we go all day long... cameras, lenses, fantastic ideas
                for photo sessions, editing techniques, and exploring new locations for
                adventure sessions. Creativity is no stranger to him, which is precious
                when it comes to our artwork. No wonder why he became such a fantastic
                artist.
              </p>
              <p className="cs-text">
                I must admit, my personal life and our <Link className="anchor" href="/">photography adventure</Link> would not
                be the same without Lukas. His cheerful personality and hard work
                perfectly contribute to our marriage and photography business. - Eliza
              </p>
              <a className="cs-button-solid" aria-label="learn more about our programs" href="/contact">contact</a>
            </div>
          </div>
        </section>
        <SingleReview />
        {/* ============================================ */}
        {/*                 Why Choose Us                */}
        {/* ============================================ */}
        <section id="why-choose-682">
          <div className="cs-container">
            {/* Left Section */}
            <div className="cs-image-group">
              <picture className="cs-picture cs-picture1">
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2023/09/Calgary-Wedding-Photographer-14.JPG
          " />
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2023/09/Calgary-Wedding-Photographer-14.JPG
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/09/Calgary-Wedding-Photographer-14.JPG" alt="wedding photo in black and white" width={306} height={360} />
              </picture>
              <picture className="cs-picture cs-picture2">
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2024/03/Calgary-Wedding-Photography-26.JPG
          " />
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2024/03/Calgary-Wedding-Photography-26.JPG
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2024/03/Calgary-Wedding-Photography-26.JPG" alt="portrait of bride and groom" width={306} height={360} />
              </picture>
              <picture className="cs-picture cs-picture3">
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2020/01/Banff-Wedding-Photography-5.JPG
          " />
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2020/01/Banff-Wedding-Photography-5.JPG
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2020/01/Banff-Wedding-Photography-5.JPG" alt="mountain wedding portraits" width={306} height={360} />
              </picture>
              <picture className="cs-picture cs-picture4">
                <source media="(max-width: 600px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2023/09/Calgary-Wedding-Photographer.JPG
          " />
                <source media="(min-width: 601px)" srcSet="
            https://4eyesphotography.ca/wp-content/uploads/2023/09/Calgary-Wedding-Photographer.JPG
          " />
                <img loading="lazy" decoding="async" src="https://4eyesphotography.ca/wp-content/uploads/2023/09/Calgary-Wedding-Photographer.JPG" alt="close up of bride putting make up on" width={306} height={360} />
              </picture>
              {/*Zig Zag Graphic*/}
              <img className="cs-graphic" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images%2FGraphics%2Fzigzag.svg" loading="lazy" decoding="async" alt="zigzag" width={983} height={416} />
            </div>
            <div className="cs-content">
              <span className="cs-topper">we'd love to work with you</span>
              <h2 className="cs-title">
                You Deserve <span className="cs-color">The Best</span> Wedding Photography
                Team
              </h2>
              <ul className="cs-ul">
                <li className="cs-li">
                  <h3 className="cs-h3">Unleashing Creative Brilliance</h3>
                  <p className="cs-item-text">
                    At <Link className="anchor" href="/">4Eyes Photography</Link>, creativity is our driving force. When we're
                    not behind the lens, we're brainstorming innovative ideas to elevate
                    our wedding photography to new heights.
                  </p>
                </li>
                <li className="cs-li">
                  <h3 className="cs-h3">Immersive Storytelling</h3>
                  <p className="cs-item-text">
                    We immerse ourselves in your special day, seamlessly blending into
                    the background to capture authentic emotions and candid <Link className="anchor" href="/wedding">wedding moments</Link>.
                    From laughter to tears of joy, we're there every step of the way,
                    ensuring your wedding memories are preserved with genuine sincerity.
                  </p>
                </li>
                <li className="cs-li">
                  <h3 className="cs-h3">Wanderlust Adventures</h3>
                  <p className="cs-item-text">
                    From <Link className="anchor" href="/">Banff</Link> to <Link className="anchor" href="/locations/calgary-wedding-photographers">Calgary</Link> and beyond, we travel far and wide to capture
                    your love story in stunning detail. No destination is too far, no
                    adventure too grand for us to embark on.
                  </p>
                </li>
              </ul>
              <a className="cs-button-solid" href="/contact">Contact us</a>
            </div>
          </div>
        </section>
        <Form />
      </Layout>
    );
  }