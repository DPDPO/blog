import BlogPost from "@/components/BlogPost";
import Container from "@/components/container";
import React from "react";

const Blog = () => {
  return (
    <Container>
      <div className={`mt-10 flex flex-col`}>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </Container>
  );
};

export default Blog;
