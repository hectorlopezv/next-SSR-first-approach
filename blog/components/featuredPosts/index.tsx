import { FC } from "react";
import styles from "../../styles/featured-posts.module.css";
import PostsGrid from "../posts";
interface props {
  posts: any;
}

const FeaturedPosts: FC<props> = (props) => {
  return (
    <section className="styles.latest">
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
