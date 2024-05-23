import React from "react";

import { Carousel } from "react-bootstrap";
import Image from "next/image";

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "93%",
  left: "12%",
  color: "var(--bodyTextColorWhite)",
 
};

export default function HeroSlider() {
  return (
    <div className="wrapperSlider">
      <div className="heroBannerPadding" />
      <div className="heroGrid">
        <div className="heroWrapper">
          <Carousel>
            <Carousel.Item interval={5000}>
              <div className="heroContent">
                <Image
                  // src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/under-deck-lighting-calgary.png"
                  src="https://4eyesphotography.ca/wp-content/uploads/2020/10/Banff-Wedding-Photographers-4.jpg"
                  width={1200}
                  height={100}
                  priority={true}
                />
                {/* <div className={styles.content1} /> */}
              </div>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h1 className="cs-title">Banff Wedding Photographers</h1>
                  {/* <p className="cs-text">a style from the ground up</p> */}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className="heroContent">
                <Image
                  // src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/deck-banner-3.webp"
                  src="https://4eyesphotography.ca/wp-content/uploads/2024/03/4E307957.JPG"
                  width={1200}
                  height={100}
                  priority={true}
                />
                {/* <div className={styles.content2} /> */}
              </div>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="cs-title">Weddings, Engagements & Elopements</h2>
                  {/* <p className="cs-text">Looking for inspiration?</p> */}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <div className="heroContent">
                <Image
                  // src="http://21-pl.purpleparrotwebsites.com/wp-content/uploads/2023/05/deck-banner-1.webp"
                  src="https://4eyesphotography.ca/wp-content/uploads/2020/10/Banff-Wedding-Photography-2-1.jpg"
                  width={1200}
                  height={100}
                  priority={true}
                />
                {/* <div className={styles.content3} /> */}
              </div>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="cs-title">Banff Adventure Sessions</h2>
                  {/* <p className="cs-text">
                    Ready to plan your 2023 deck build?
                  </p> */}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
