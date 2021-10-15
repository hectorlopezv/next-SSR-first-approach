import type { NextPage } from "next";
import PostContent from "../../components/posts/post-detail/post-content";
import Head from "next/head";
interface props {
  post: any;
}
const Post: NextPage<props> = (props) => {
  const { image, content, title } = props.post;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={content}
        />
      </Head>
      <PostContent image={image} title={title} content={content} />
    </>
  );
};

export default Post;
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx; // your fetch function here
  const { slug } = params as any;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths } from "next";
import { getPostData, getFilesNames } from "../../lib/post-util";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const postFileNames = getFilesNames();
  const slugs = postFileNames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};
