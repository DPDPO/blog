import Head from "next/head";
import React from "react";
import metadata from "components/data/metadata";

const Container = (props) => {
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <main className={`w-full max-w-3xl`}>{props.children}</main>
    </div>
  );
};

export default Container;
