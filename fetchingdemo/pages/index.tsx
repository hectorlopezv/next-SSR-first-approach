import type { NextPage } from "next";
import { GetStaticProps } from "next";
import fs from "fs/promises";
import path from "path";
interface Props {
  products: any[];
}
const Home: NextPage<Props> = (props) => {
  //const products: any[] = JSON.parse(props.products).products;
  //console.log("pr", products);
  console.log("props", props);
  return (
    <>
      <ul>
        {props.products.map((item) => (
          <li key={item.anime}>{item.anime}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;

//se ejecuta primero despues el component
//happens in the server
//has access to file system
export const getStaticProps: GetStaticProps = async (ctx) => {
  // const dataBackEnd = JSON.stringify(
  //   await import("../data/dummy-backend.json")
  // );
  // const pathData = path.join(process.cwd(), "/data/dummy-backend.json");
  // const dataBackEnd = await fs.readFile(pathData);
  const dataBackEnd = await fetch("https://animechan.vercel.app/api/random");
  const data = await dataBackEnd.json();
  const arrData = [{ ...data }];
  console.log("data", data);

  return {
    props: {
      products: arrData,
    },
    revalidate: 60, //recreated at most one every 60 seconds in production
  };
};
