// import Layout from "../../components/Layout";
import { useRef, useState } from "react";
import Link from "next/link";

// export async function getServerSideProps() {
//   return {};
// }

export default function Write() {
  const idRef = useRef(undefined);
  const titleRef = useRef(undefined);
  const contentRef = useRef(undefined);

  const [showLink, setShowLink] = useState(false);

  const handleSumbit = (event) => {
    event.preventDefault();

    const id = idRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (id && title && content) {
      fetch("/api/post/write", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Fetch Error");
        })
        .then((data) => {
          setShowLink(true);
          alert(data.message);
        })
        .catch((error) => alert(`request error: ${error}`));
    }
  };
  return (
    <>
      <div style={{ marginBottom: "30px", fontSize: "30px" }}>Write a post</div>
      <form onSubmit={handleSumbit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        />
        <br />
        <input type="submit" value="Create" />
      </form>
      {showLink && (
        <div style={{ width: "30px", marginTop: "30px" }}>
          <Link href={`/posts/${idRef.current.value}`}>
            <span style={{ color: "grey" }}>Created Post</span>
          </Link>
        </div>
      )}
    </>
  );
}