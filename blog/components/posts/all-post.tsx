import { FC } from "react";
import PostsGrid from ".";
import styles from "../../styles/all-posts.module.css";
import PostItem from "./post-item";
interface props {
  posts: any[];
}

const AllPosts: FC<props> = (props) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
