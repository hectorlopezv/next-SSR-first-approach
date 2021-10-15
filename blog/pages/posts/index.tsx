import type { NextPage } from "next";
import AllPosts from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/post-util";
import Head from "next/head";
interface props {
  posts: any;
}

const AllPostPage: NextPage<props> = (props) => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="A list of all programmingg tutorials and posts"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};
export default AllPostPage;

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};
