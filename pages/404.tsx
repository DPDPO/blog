import Image from "next/image";
import React from "react";

const Custom404 = (statusCode: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Image
        priority
        src="/images/profile.png"
        height={144}
        width={144}
        alt=""
      />
      <div>찾을 수 없는 페이지 입니다.</div>
    </div>
  );
};

export default Custom404;
