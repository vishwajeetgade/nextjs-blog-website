import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "content/posts");
const secretDirectory = path.join(process.cwd(), "content/secrets");

export function getPostFiles(directory = "Posts") {
  return fs.readdirSync(
    directory === "Posts" ? postDirectory : secretDirectory
  );
}

export function getPostData(postIndetifier, directory = "Posts") {
  const postSlug = postIndetifier.replace(/\.md$/, ""); //removes the file extension
  const filePath = path.join(
    directory === "Posts" ? postDirectory : secretDirectory,
    `${postSlug}.md`
  );
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

export function getAllSecretPosts() {
  const postFiles = getPostFiles("Secret");

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile, "Secret");
  });

  allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return allPosts;
}
