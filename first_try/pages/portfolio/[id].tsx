import type { NextPage } from "next";
import { useRouter } from "next/router";
const Project: NextPage = () => {
  const router = useRouter();
  console.log("router", router);
  return <div className={""}>Project</div>;
};

export default Project;
