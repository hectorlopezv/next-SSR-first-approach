import type { NextPage } from "next";
import { useRouter } from "next/router";

const BlogHome: NextPage = () => {
  const router = useRouter();
  console.log("blog router", router.query);
  return <div className={""}>BlogHome</div>;
};

export default BlogHome;
