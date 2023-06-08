import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps | any) {
  return (
    <>
      <Header />
      <main className="transition duration-500 min-h-screen bg-white dark:bg-[#111111] text-black dark:text-white">
        <div className="max-w-screen-md flex flex-col px-10 m-auto">
          {props.children}
        </div>
      </main>
      <Footer />
    </>
  );
}
