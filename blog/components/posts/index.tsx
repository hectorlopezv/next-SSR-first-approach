import { FC } from "react";
import styles from "../../styles/posts-grid.module.css";
import PostItem from "./post-item";
interface props {
  posts: any[];
}

const PostsGrid: FC<props> = (props) => {
  return (
    <ul className={styles.grid}>
      {props.posts.map((post) => {
        return <PostItem post={post} key={post.title} />;
      })}
    </ul>
  );
};

export default PostsGrid;
