import React from "react";
import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import { getFeaturedPosts } from "../lib/posts-utils";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Hinata' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
