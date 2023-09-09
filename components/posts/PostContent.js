import React from "react";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import Image from "next/image";
import remarkGfm from "remark-gfm";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = (props) => {
  const PATH_NAME = props.pathName ? props.pathName : "posts";
  const imagePAth = `/images/${PATH_NAME}/${props.slug}/${props.image}`;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/${PATH_NAME}/${props.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
          style={{height: 'auto'}}
        />
      );
    },

    p(paragraph) {
      return <div>{paragraph.children}</div>;
    },

    code(code) {
      const { className, children, inline } = code;
      if (inline) {
        return (
          <pre className={styles.inlineCode}>
            <code>{children}</code>
          </pre>
        );
      }
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={className ? className.split("-")[1] : "js"}
          children={children}
        />
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={props.title} image={imagePAth} />
      <ReactMarkdown components={customRenderers} remarkPlugins={[remarkGfm]}>
        {props.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
