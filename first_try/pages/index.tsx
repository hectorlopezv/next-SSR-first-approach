import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <div className={""}>hellog</div>
      <Link replace href="/portfolio">Link To Portofolio</Link>
      <Link replace href="/clients">Clients</Link>
    </>
  );
};

export default Home;
