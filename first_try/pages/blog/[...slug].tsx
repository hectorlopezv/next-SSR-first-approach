import type { NextPage } from "next";
import { useRouter } from "next/router";

const Blog: NextPage = () => {
  const router = useRouter();
  console.log("blog router", router.query);
  return <div className={""}>Blog</div>;
};

export default Blog;
