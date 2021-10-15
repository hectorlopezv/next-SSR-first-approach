import { FC } from "react";
import styles from "../../styles/logo.module.css";
interface props {}

const Logo: FC<props> = () => {
  return <div className={styles.logo}>Hector blog</div>;
};

export default Logo;
