import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-10 pt-6">
      <h1 className="text-2xl font-semibold text-gray-600">Blogs</h1>
      <div className={"flex h-96 flex-col items-center justify-center"}>
        <Image width={400} height={400} src={"/empty.png"} alt={"empty"} />
        <span className={"italic text-slate-400"}>No Posts yet ...</span>
      </div>
    </div>
  );
}
