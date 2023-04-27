import Head from "next/head";
// import { useEffect, useState } from 'react'
import Layout from "../components/Layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import { useEffect, useState } from "react";
import Paginate from "../components/Pagination";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3000/api/posts')
//   const json = await response.json()

//   return {
//     props: {
//       allPostsData: json.allPostsData,
//     },
//   }
// }

export default function Home({ allPostsData }) {
  // const [allPostsData, setAllPostsData] = useState([])
  // useEffect(() => {
  //   fetch('/api/posts')
  //     .then((res) => res.json())
  //     .then((data) => setAllPostsData(data.allPostsData))
  // }, [])

  const [posts, setPosts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const initial = posts.slice(0, 5);
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  // eslint-disable-next-line no-unused-vars
  const selecter = (value) => {
    setPostPerPage(Number(value));
    setPage(1);
  };
  useEffect(() => {
    setPosts(allPostsData);
    setCurrentPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
  }, [indexOfFirstPost, indexOfLastPost, page]);

  return (
    <Layout home>
      <Head>
        <title>blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I love coding 😍</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className="BtnLa">
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <Link href="/post/write">
            <button className="Btn">write</button>
          </Link>
        </div>
        <ul className={utilStyles.list}>
          {currentPosts.length === 0
            ? initial.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))
            : currentPosts.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
        </ul>
      </section>
      <div style={{ marginTop: "40px" }}>
        <Paginate
          totalCount={posts.length}
          page={page}
          postPerPage={postPerPage}
          setPage={setPage}
        />
      </div>
    </Layout>
  );
}
// csr
// export default function Home() {
//   const [allPostsData , setAllPostsData] = useState([])
//   useEffect(()=>{
//     fetch('/api/posts').then((res) => res.json())
//     .then((data)=> setAllPostsData(data.allPostsData))
//   },[])
//   return (
//     <Layout home>
//       <Head>
//         <title>{siteTitle}</title>
//       </Head>
//       <section className={utilStyles.headingMd}>
//         <p>Hello I am Park</p>
//         <p>
//           (This is a sample website - you’ll be building a site like this on{" "}
//           <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//         </p>
//       </section>
//       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
//         <h2 className={utilStyles.headingLg}>Blog</h2>
//         <ul className={utilStyles.list}>
//           {allPostsData.map(({ id, date, title }) => (
//             <li className={utilStyles.listItem} key={id}>
//               {title}
//               <br />
//               {id}
//               <br />
//               {date}
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Layout>
//   );
// }

// ssr
// export async function getServerSideProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

// export async function getServerSideProps() {
//   const response = await fetch("http://localhost:3000/api/posts");
//   const json = await response.json();

//   return {
//     props: {
//       allPostsData: json.allPostsData,
//     },
//   };
// }

//  getStaticProps는 빌드시 동작
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }
