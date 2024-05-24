import { getWeddingPosts } from "../lib/api";

import ContentCard from "../components/common/ContentCard";

export const getStaticProps = async () => {
  const data = await getWeddingPosts();
  return {
    props: {
      data,
    },
  };
};

export default function Wedding({ data }) {
  return <ContentCard data={data} />;
}
