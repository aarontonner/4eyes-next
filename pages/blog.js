import Image from "next/image";
import Layout from "../components/layout";
import { getBlogPosts } from "../lib/api";

export const getStaticProps = async () => {
  const data = await getBlogPosts();
  return {
    props: {
      data,
    },
  };
};

export default function Blog({ data }) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return (
    <Layout>
      <div id="banner-559">
        {/*Background Image*/}
        <picture className="cs-background">
          {/*Mobile Image*/}
          <source
            media="(max-width: 600px)"
            srcSet="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          />
          {/*Tablet and above Image*/}
          <source
            media="(min-width: 601px)"
            srcSet="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          />
          <img
            loading="lazy"
            decoding="async"
            srcSet="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="image not found"
            width={1280}
            height={868}
            aria-hidden="true"
          />
        </picture>
      </div>

      <div className="page-header">
        <div className="page-title-container">
          <div className="row">
            <div className="col-12">
              <div className="page-title">
                <h1 className="blog-h1">Blog</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-container">
        <div className="row">
          {data?.nodes?.map((item) => {
            return (
              <div className="col-12 col-md-4">
                {/* <div className="blog item single-1">
                  <div className="image img">
                    <a
                      href="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                      title="Planning A Surprise Proposal In Banff"
                    >
                      <img
                        className="d-block w-100"
                        alt="Planning A Surprise Proposal In Banff"
                        loading="lazy"
                        width={200}
                        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg "
                      />
                      <div className="button">See more</div>
                    </a>
                  </div>
                  <div className="detail">
                    <div className="entry_title_con">
                      <h3 className="entry-title">
                        <a
                          href="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                          title="Planning A Surprise Proposal In Banff"
                        >
                          {item?.title}
                        </a>
                      </h3>
                    </div>
                    <div className="entry-date_author">{item?.date}</div>
                    <div className="entry-excerpt">
                      {item?.content?.replace(/<\/?[^>]+(>|$)/g, "")}
                    </div>
                  </div>
                  <div className="clear"></div>
                </div> */}
                <div className="blog-content">
                  <div className="container">
                    <img
                      // src={item?.extraFields?.bannerImage?.node?.searchUrl}
                      //
                      src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                      alt="Snow"
                    />
                    <button type="button" className="see-more">
                      See more
                    </button>
                  </div>
                  <p className="blog-title">{item?.title}</p>
                  <p className="entry-date-author">
                    {new Date(item?.date).toLocaleDateString("en-GB", options)}
                  </p>
                  <p className="entry-excerpt">
                    {item?.content?.replace(/(<([^>]+)>)/gi, "")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
