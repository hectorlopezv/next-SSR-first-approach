import type { NextPage } from "next";
import Hero from "../components/hero";
import Head from "next/head";
import FeaturedPosts from "../components/featuredPosts";
import { getFeaturesPosts } from "../lib/post-util";
interface props {
  posts: any;
}
const Home: NextPage<props> = (props) => {
  return (
    <>
      <Head>
        <title>Welcome to my Blog</title>
        <meta name="description" content="I post Abpute React.js" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export default Home;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const featuresPosts = getFeaturesPosts();
  console.log("featuresPosts", featuresPosts);

  return {
    props: {
      posts: featuresPosts,
    },
  };
};
