import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={"flex flex-col items-center justify-center gap-4"}>
      <Image width={400} height={400} src={"/wait.png"} alt={"loading"} />
      <span className={"italic text-slate-400"}>Loading ...</span>
    </div>
  );
}
