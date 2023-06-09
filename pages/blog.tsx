import PostList from "components/PostList";
import Container from "components/container";
import { Post, allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import React, { ChangeEvent, useState } from "react";
import { SearchInput } from "components/Input";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <div className="ml-1 mb-3">
          <span style={{fontWeight:"700"}}>전체 글 목록</span> <span style={{ color: "skyblue" }}>({posts.length}) </span>
        </div>
        <div className="mb-4">
          <SearchInput onChange={handleSearch} />
        </div>
      </div>
      <PostList
        posts={(posts as Post[]).filter((post) =>
          post.title.toLowerCase().includes(search)
        )}
      />
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
