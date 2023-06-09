import { allPosts } from "contentlayer/generated";
import Utterances from "components/Utterances";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  return (
    <>
      <div className="mt-10 pb-10 border-b-2 mb-10 prose dark:prose-invert">
        <h1 style={{ fontSize: "40px" }}>{post.title}</h1>
        <div className="mb-16 text-gray-400">{post.date}</div>
        <MDXComponent />
      </div>
      <Utterances />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params?.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;
