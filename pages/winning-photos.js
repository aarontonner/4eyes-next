import { getWinningPosts } from "../lib/api";

import ContentCard from "../components/common/ContentCard";

export const getStaticProps = async () => {
  const data = await getWinningPosts();
  return {
    props: {
      data,
    },
  };
};

export default function WinningPhotos({ data }) {
  return <ContentCard data={data} />;
}
