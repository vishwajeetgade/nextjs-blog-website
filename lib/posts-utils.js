import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "content/posts");


export function getPostFiles() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(postIndetifier) {
  const postSlug = postIndetifier.replace(/\.md$/, ""); //removes the file extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => {
    return post.isFeatured;
  });

  return allPosts;
}
