import React from "react";
import PostContent from "../../components/posts/PostContent";
import { getPostData, getPostFiles } from "../../lib/posts-utils";

const SecretPostDetailPage = (props) => {
  return <PostContent  {...props.post}/>;
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug, "Secret");

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFiles = getPostFiles("Secret");
  const slugs = postFiles.map((fileName) => {
    return {
      params: { slug: fileName.replace(/\.md$/, "") },
    };
  });

  return {
    paths: slugs,
    fallback: false,
  };
}

export default SecretPostDetailPage;
