import React from "react";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-utils";


const AllPostPage = (props) => {
  return (
    <AllPosts posts={props.posts} />
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  }
}

export default AllPostPage;
