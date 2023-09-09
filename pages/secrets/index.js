import React from "react";
import AllPosts from "../../components/posts/AllPosts";
import { getAllSecretPosts } from "../../lib/posts-utils";


const AllSecretPostPage = (props) => {
  return (
    <AllPosts posts={props.posts} />
  );
};

export function getStaticProps() {
  const allPosts = getAllSecretPosts();

  return {
    props: {
      posts: allPosts,
    },
  }
}

export default AllSecretPostPage;
