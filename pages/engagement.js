// import "../styles/portfolio.scss"

import { getEngagementPosts } from "../lib/api";

import ContentCard from "../components/common/ContentCard";

export const getStaticProps = async () => {
  const data = await getEngagementPosts();
  return {
    props: {
      data,
    },
  };
};

export default function Engagement({ data }) {
  return <ContentCard data={data} />;
}
