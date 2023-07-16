import { useRouter } from "next/router";
import React from "react";

export default function shop() {
  const router = useRouter()
  return (
    <div className="flex flex-col w-full  h-[160vw]" onClick={()=>router.push("/productDetail") }  style={{
      backgroundImage: `url("/shopbg.png")`,
      backgroundSize: "100%",
    }}>
    </div>
  );
}
