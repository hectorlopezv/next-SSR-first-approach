import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsPath = path.join(process.cwd(), "posts");

export function getPostData(postIdentifier: any) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsPath, "/", `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}
export function getFilesNames(){
  return fs.readdirSync(postsPath);
}
export function getAllPosts() {
  const postFiles: any = getFilesNames()
  const AllPosts: any = postFiles.map((postFile: any) => getPostData(postFile));
  const sortedPosts = AllPosts.sort((postA: any, postB: any) =>
    postA.Date > postB.data ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturesPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post: any) => post.isFeatured);
  return featuredPosts;
}
