import Layout from "../components/layout";
import { getBlogPosts } from "../lib/api";
import Link from "next/link";
import { useRouter } from "next/router";

export const OPTIONS = { day: "numeric", month: "long", year: "numeric" };

export const getStaticProps = async () => {
  const data = await getBlogPosts();
  return {
    props: {
      data,
    },
  };
};
export default function Blog({ data }) {
  const router = useRouter();
  const { extraFields } = data.page;
  return (
    <Layout>
      <div id="banner-559">
        {/*Background Image*/}
        <picture className="cs-background">
          {/*Mobile Image*/}
          <source
            media="(max-width: 600px)"
            srcSet={extraFields?.bannerImage?.node?.sourceUrl}
          />
          {/*Tablet and above Image*/}
          <source
            media="(min-width: 601px)"
            srcSet={extraFields?.bannerImage?.node?.sourceUrl}
          />
          <img
            loading="lazy"
            decoding="async"
            srcSet={extraFields?.bannerImage?.node?.sourceUrl}
            alt="image not found"
            width={1280}
            height={968}
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
          {data.posts?.nodes?.map((item) => {
            return (
              <div className="col-12 col-md-4">
                <div className="blog-content">
                  <div
                    className="container"
                    onClick={() =>
                      router.push({
                        pathname: `blog/${item?.slug}`,
                        query: { id: item?.id },
                      })
                    }
                  >
                    <img
                      className="blog-img"
                      src={
                        item?.extraFields?.bannerImage?.node?.sourceUrl ||
                        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                      }
                      alt="Snow"
                    />
                    <button type="button" className="see-more">
                      <Link
                        className="see-more"
                        href={{
                          pathname: `blog/${item?.slug}`,
                          query: { id: item?.id },
                        }}
                      >
                        See More
                      </Link>
                    </button>
                  </div>
                  <p className="blog-title">{item?.title}</p>
                  <p className="entry-date-author">
                    {new Date(item?.date).toLocaleDateString("en-GB", OPTIONS)}
                  </p>
                  <p className="entry-excerpt">
                    {item?.content?.replace(/(<([^>]+)>|&nbsp;)/gi, "")}
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
