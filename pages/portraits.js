import ContentCard from "../components/common/ContentCard";
import { getPortraitPosts } from "../lib/api";

export const getStaticProps = async () => {
  const data = await getPortraitPosts();
  return {
    props: {
      data,
    },
  };
};
export default function Portraits({ data }) {
  return <ContentCard data={data} />;
}
