import { FC } from "react";
import MainNavigation from "./main-navigation";
interface props {}

const Layout: FC<props> = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
