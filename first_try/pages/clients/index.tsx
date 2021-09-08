import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
const Clients: NextPage = () => {
  const router = useRouter();
  const clients = [
    {
      id: "max",
      name: "maximiliam",
    },
    {
      id: "hec",
      name: "hector",
    },
  ];
  const NavigationHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientProject]",
      query: {
        id: "navigation",
        clientProject: "imperative",
      },
    });
    //router.replace()
  };
  return (
    <>
      <div className={""}>Clients</div>
      {clients.map((item) => (
        <div key={item.name}>
          <Link replace href={`/clients/${item.id}`}>
            {item.name}
          </Link>
        </div>
      ))}
      <Link
        replace
        href={{
          pathname: "/clients/[id]/[clientProject]",
          query: {
            id: "hector",
            clientProject: "andres",
          },
        }}
      >
        Hector Andres
      </Link>
      <button onClick={NavigationHandler}>Imperative</button>
    </>
  );
};

export default Clients;
