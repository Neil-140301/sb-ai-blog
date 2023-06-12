import React from "react";

const bg = [
  "bg-red-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-yellow-100",
  "bg-indigo-100",
];
const text = [
  "text-red-600",
  "text-blue-600",
  "text-green-600",
  "text-yellow-600",
  "text-indigo-600",
];

const border = [
  "border-red-600",
  "border-blue-600",
  "border-green-600",
  "border-yellow-600",
  "border-indigo-600",
];

export default function Keywords({ keywords, topicId }: KeywordProps) {
  return (
    <div className="flex items-center gap-3">
      {keywords.map((keyword) => {
        const randomIndex = Math.floor(Math.random() * bg.length);
        return (
          <span
            className={`rounded-full text-center border-2 px-5 py-1 text-xs ${border[randomIndex]} ${bg[randomIndex]} ${text[randomIndex]}`}
            key={keyword + topicId}
          >
            {keyword}
          </span>
        );
      })}
    </div>
  );
}

type KeywordProps = {
  keywords: string[];
  topicId: number;
};
