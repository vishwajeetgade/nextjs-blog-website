import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import Image from "next/image";

const PostContent = (props) => {
  const imagePAth = `/images/posts/${props.slug}/${props.image}`;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${props.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },

    code(code) {
      const { className, children } = code;

      return <SyntaxHighlighter style={atomDark} language={className.split('-')[1]}  children={children} />
    }
  };

  return (
    <article className={styles.content}>
      <PostHeader title={props.title} image={imagePAth} />
      <ReactMarkdown components={customRenderers}>
        {props.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
