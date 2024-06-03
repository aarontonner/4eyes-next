import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { getSingleBlog } from "../../lib/api";
import { useState } from "react";
import ImageLightbox from "../../components/common/Lightbox";
import { OPTIONS } from "../../pages/blog.js";
import Image from "next/image";

export async function getServerSideProps({ query }) {
  let data = null;
  try {
    data = await getSingleBlog(query?.id);
  } catch (err) {}

  return {
    props: {
      data,
    },
  };
}
const formatDate = (dateString) => {
  const date = new Date(dateString);

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return { month, day, year };
};
const Blogs = ({ data }) => {
  const [isOpenLightBox, setIsOpenLightBox] = useState(false);
  const [index, setIndex] = useState(0);
  const { title, tags, content, date, extraFields } = data?.post || {};
  const { blogGalleries, bannerImage } = extraFields || {};
  const router = useRouter();
  const { month, day, year } = formatDate(date);
  const { id } = router.query;
  if (isOpenLightBox) {
    return (
      <ImageLightbox
        isOpen={isOpenLightBox}
        setIsOpen={setIsOpenLightBox}
        images={blogGalleries?.nodes}
        index={index}
      />
    );
  }

  return (
    <Layout>
      <div id="banner-559 " style={{ position: "relative" }}>
        <picture className="cs-background" style={{ height: "400px" }}>
          <source
            media="(max-width: 600px)"
            srcSet={bannerImage?.node?.sourceUrl}
          />
          <source
            media="(min-width: 601px)"
            srcSet={bannerImage?.node?.sourceUrl}
          />
          <img
            src={bannerImage?.node?.sourceUrl}
            height={400}
            className="singe-blog-banner img-fluid"
            alt="Responsive image"
          />
        </picture>
        {bannerImage?.node?.sourceUrl && (
          <div className="flying-date">
            <span className="month">{month}</span>
            <div className="seprator"></div>
            <span className="day">{day}</span>
            <div className="seprator"></div>
            <span className="year">{year}</span>
          </div>
        )}
        {/* <div className="container container_flying_date"></div> */}
      </div>

      <div className="blog-page-parent mb-4">
        <div className="w-80 text-center blog-page-header">
          <h1 className="entry-title ">{title}</h1>
        </div>
        <div className="elementor-heading-title">
          {/* <span>Banff Engagement Photographs</span> */}
          <div
            className="blog-para"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
        <div className=" text-center">
          <div className="row">
            {blogGalleries?.nodes?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="col-12 col-md-6 object-fit-cover mt-4 bg-succdfess blog-img"
                >
                  <div
                    className="blog-img-container"
                    onClick={() => {
                      setIsOpenLightBox(true);
                      setIndex(i);
                    }}
                  >
                    <img
                      src={item?.sourceUrl}
                      alt="Avatar"
                      className="image"
                      style={{
                        width: "100%",
                      }}
                    />
                    <div className="middle">
                      <div className="search-icon">
                        <Image
                          src="/svg/search.svg"
                          height={60}
                          width={60}
                          alt="icon not found"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="category-post ">
          Category:{" "}
          <span className="cursor-pointer" onClick={() => router.push("/blog")}>
            Blogs
          </span>{" "}
          • Author: 4Eyes Photography •
          {new Date(date).toLocaleDateString("en-GB", OPTIONS)}
        </div>
        <div className="blog-tags">
          Tags:
          {tags?.nodes?.map((item) => {
            return (
              <span
                className="blog-tags-item cursor-pointer"
                onClick={() => router.push(item?.link)}
              >
                {item?.name}
              </span>
            );
          })}
        </div>
        <div className="share-blog">
          <p>Share This Article </p>
          <div>
            <Image
              onClick={() =>
                router.push(
                  "https://www.facebook.com/sharer.php?u=https://4eyesphotography.ca/engagement-at-lake-louise/"
                )
              }
              src="/svg/facebook.svg"
              alt="icon not found"
              className="cursor-pointer"
              width={36}
              height={36}
            />
            <Image
              src="/svg/linkdin.svg"
              onClick={() =>
                router.push(
                  "https://www.linkedin.com/shareArticle?mini=true&url=https://4eyesphotography.ca/engagement-at-lake-louise/"
                )
              }
              alt="icon not found"
              className="cursor-pointer"
              width={36}
              height={36}
            />
            <Image
              src="/svg/twitter.svg"
              onClick={() =>
                router.push(
                  "https://twitter.com/share?url=https://4eyesphotography.ca/engagement-at-lake-louise/"
                )
              }
              alt="icon not found"
              className="cursor-pointer"
              width={29}
              height={36}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blogs;
