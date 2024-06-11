// import "../../styles/components.scss"
import Link from "next/link";
export default function Form() {
    return (
      <section id="contact-1700">
        <div className="cs-container">
          <div className="cs-content">
            <h2 className="cs-title">We'd love to hear from you!</h2>
            <p className="cs-text">
              We'd be so thrilled to be part of your wedding journey. Whether you're
              looking for the perfect photographer to capture your big day in <Link href="/locations/calgary-wedding-photographers">Calgary</Link> or amidst the stunning landscapes of <Link href="/">Banff</Link>, we're here to turn your
              vision into reality. Got questions about our services, <Link href="/investment">wedding packages</Link>, or
              availability? Need advice on choosing the ideal location for your
              engagement shoot or wedding ceremony? Or perhaps you just want to chat
              about your photography dreams over a virtual cup of coffee? Whatever it
              may be, we're all ears and ready to assist!
            </p>
            <div className="cs-author">
              <picture className="cs-profile">
                <img src="https://4eyesphotography.ca/wp-content/uploads/2022/11/Banff-And-Calgary-Wedding-Photographers-3.jpg" alt="banff wedding photographers" width={35} height={40} loading="lazy" decoding="async" aria-hidden="true" />
              </picture>
              <div className="cs-flex-group">
                <span className="cs-job">~ Eliza &amp; Lukas</span>
              </div>
            </div>
          </div>
          {/*Form*/}
          <form className="cs-form" id="cs-form-1700" name="Contact Form" method="post">
            <div className="cs-content">
              <h2 className="cs-title">Contact us here</h2>
            </div>
            <label className="cs-label">
              Name *
              <input className="cs-input" required type="text" id="name-1700" name="name" placeholder="Name" />
            </label>
            <label className="cs-label">
              Email *
              <input className="cs-input" required type="email" id="email-1700" name="email" placeholder="Email" />
            </label>
            <label className="cs-label">
              Phone
              <input className="cs-input" type="number" id="phone-1700" name="phone" placeholder="Phone" />
            </label>
            <label className="cs-label">
              Message *
              <textarea className="cs-input cs-textarea" required name="Message" id="message-1700" placeholder="Message" defaultValue={""} />
            </label>
            <button className="cs-button-solid cs-submit" type="submit">Send!</button>
            <picture className="cs-background">
              {/*Mobile Image*/}
              <source media="(max-width: 600px)" srcSet="
            https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/enterprise-building.png
          " />
              {/*Tablet and above Image*/}
              <source media="(min-width: 601px)" srcSet="
            https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/enterprise-building.png
          " />
              <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/enterprise-building.png" alt="wind turbine" width={650} height={613} />
            </picture>
          </form>
        </div>
      </section>
    );
  }