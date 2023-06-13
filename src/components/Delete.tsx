"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function DeleteTopic({ deleteFunction }: DeleteTopicProps) {
  const path = usePathname();
  const searchParams = useSearchParams();
  return (
    <form
      action={() => deleteFunction(`${path}?${searchParams.toString()}`)}
      className={"hidden group-hover:block"}
    >
      <button className="btn-error btn-sm btn">Delete</button>
    </form>
  );
}

type DeleteTopicProps = {
  deleteFunction: (p: string) => void;
};
