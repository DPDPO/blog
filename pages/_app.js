import Layout from "@/components/Layout";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Custom404 from "./404";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/404" ? (
        <Custom404 statusCode={"404"} />
      ) : (
        <Layout home={router.pathname === "/"}>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
};

export default App;
