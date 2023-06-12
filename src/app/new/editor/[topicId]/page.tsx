import React from "react";
import { PageProps } from "@/app/utils/types";
import MyEditor from "@/components/MyEditor";
import { fetchTopic } from "@/app/utils/data";

export default async function BlogEditor({ params }: PageProps) {
  const topicId = params["topicId"] as string;
  const topic = await fetchTopic(parseInt(topicId));

  return (
    <div className="mt-1 flex h-[calc(100vh-4.25rem)] bg-gray-50">
      <MyEditor topic={topic} />
    </div>
  );
}
