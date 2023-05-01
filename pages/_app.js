import Layout from "@/components/Layout";
import "../styles/globals.css";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <Layout home={router.pathname === "/"}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
