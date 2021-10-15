import { FC } from "react";
import styles from "../../styles/post-item.module.css";
import Link from "next/link";
import Image from "next/image";
interface props {
  post: any;
}

const PostItem: FC<props> = (props) => {
  const { title, image, excerpt, date, slug } = props.post;
  const formatDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${image}`;
  const LinkPath = `/posts/${slug}`;
  return (
    <li className={styles.post}>
      <Link href={LinkPath}>
        <a>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formatDate}</time>
            <p>{excerpt}t</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
