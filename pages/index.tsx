import Container from "components/container";
import Image from "next/image";
import React from "react";
import metadata from "./data/metadata";
import RecentPosts from "components/RecentPosts";
import { InferGetStaticPropsType } from "next";
import { allPosts } from "contentlayer/generated";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={`my-5 w-full`}>
        ...
        <RecentPosts posts={posts} />
      </div>
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

export default Home;
