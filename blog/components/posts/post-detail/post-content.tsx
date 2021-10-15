import { FC } from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";
import styles from "../../../styles/post-content.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface props {
  image: string;
  title: string;
  content: string;
}

const PostContent: FC<props> = (props) => {
  const imagePath = `/images/posts/${props.image}`;

  const customRenderers = {
    p(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code: any) {
      console.log("code", code);
      const { language, children } = code;
      return (
        <SyntaxHighlighter style={darcula} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <article className={styles.content}>
      <PostHeader title={props.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {props.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
