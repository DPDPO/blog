import { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import Image from "next/image";
import Head from "next/head";

type Theme = null | "dark" | "light";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const [onToggle, setOnToggle] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>(null);

  // 테마를 전환하기 위해 사용.
  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    // 사용자 로컬 스토리지에 저장하고 태마 변경시마다 body의 class를 바꿔준다.
    window.localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  // 스크롤이 내려가면 헤더 하단에 그림자 속성을 주기 위해서 사용했다.
  const handleScroll = () => {
    if (window.scrollY > 0) {
      headerRef.current?.classList.add("shadow-[0_5px_7px_0px_#ececec]");
      return;
    }
    headerRef.current?.classList.remove("shadow-[0_5px_7px_0px_#ececec]");
  };

  // 모달을 켜고 끄기 위해서 사용.
  const handleToggle = () => {
    if (onToggle) toggleRef.current?.classList.add("hidden");
    else toggleRef.current?.classList.remove("hidden");
    setOnToggle((prev) => !prev);
  };

  // 스크롤 이벤트와 테마를 적용하는 코드를 넣어준다.
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setTheme(document.body.className as Theme);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 스타일은 자유 변경이 가능하다.
  return (
    <>
      <Head>
        <title>PSC BLOG</title>
      </Head>
      <header
        ref={headerRef}
        className="sticky top-0 left-0 w-full z-10 h-20 font-mono transition duration-500 bg-white dark:bg-[#111111] border-dashed border-b border-black dark:border-white"
      >
        <div className="text-black max-w-screen-md h-20 flex flex-nowrap items-center justify-between m-auto px-8">
          <a
            target="_blank"
            href="https://codesandbox.io/s/?utm_source=landingpage"
            rel="noopener noreferrer"
          >
            <span
              className="hvr-curl-top-left dark:text-white"
              style={{ fontSize: "20px" }}
            >
              Coding
            </span>
          </a>

          <div className="flex flex-nowrap gap-8 items-center">
            <button type="button" className="m-0 p-0" onClick={handleTheme}>
              {theme === "dark" ? (
                <Image
                  src="/images/light.svg"
                  alt="dark mode"
                  width={30}
                  height={30}
                />
              ) : (
                <Image
                  src="/images/dark.svg"
                  alt="light mode"
                  width={30}
                  height={30}
                />
              )}
            </button>
            <button
              type="button"
              className="m-0 p-0 sm:hidden"
              onClick={handleToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 transition duration-500 stroke-black dark:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="flex-nowrap items-center justify-center gap-5 text-center hidden sm:flex">
              <Nav type="normal" />
            </div>
          </div>
        </div>
        <div
          ref={toggleRef}
          className="w-full h-screen absolute top-20 left-0 bg-white flex-col flex-nowrap p-5 flex hidden dark:bg-[#111111]"
        >
          <Nav type="toggle" onClick={handleToggle} />
        </div>
      </header>
    </>
  );
}
