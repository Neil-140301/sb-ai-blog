import { Topic } from "@/app/utils/types";

export const categories = [
  {
    name: "All",
  },
  {
    name: "Custom",
  },
  {
    name: "ICP",
  },
  {
    name: "Mission",
  },
  {
    name: "Product",
  },
];

export const tones = [
  "Professional",
  "Funny",
  "Casual",
  "Enthusiastic",
  "Informational",
];

export const length = ["Short", "Medium", "long"];

export function fetchCategories() {
  return new Promise<typeof categories>((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 500);
  });
}

export function fetchTopics(category: string) {
  return new Promise<Topic[]>((resolve) => {
    let topics = readTopics();
    let sendTopics = topics.filter((topic) => topic.category === category);
    if (category === "All") sendTopics = topics;

    setTimeout(() => {
      resolve(sendTopics);
    }, 500);
  });
}

export function fetchTopic(topicId: number) {
  return new Promise<Topic>((resolve) => {
    let topics = readTopics();
    resolve(topics.find((t) => t.id === topicId) || ({} as Topic));
  });
}

export function generateBlog() {
  return `
   <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
   </p>
  `;
}

export function generateImage() {
  return '<img src="/image.jpeg" alt="ai-image" width={200} height={200} />';
}

function readTopics(): Topic[] {
  return require("../../../topics.json")["topics"];
}
