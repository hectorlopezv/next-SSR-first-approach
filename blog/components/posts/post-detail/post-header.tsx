import { FC } from "react";
import styles from "../../../styles/post-header.module.css";
import Image from "next/image";
interface props {
  title: string;
  image: string;
}

const PostHeader: FC<props> = (props) => {
  const { title, image } = props;
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
