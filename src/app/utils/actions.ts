"use server";

import { writeFileSync } from "fs";
import { Topic } from "@/app/utils/types";
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";

async function writeTopics(data: { topics: Topic[] }) {
  writeFileSync("topics.json", JSON.stringify(data, null, 2), "utf8");
  console.log("done");
}

export async function addTopic(formData: FormData) {
  let data = require("../../../topics.json");
  data["topics"].push({
    id: data["topics"].length + 1,
    category: "Custom",
    title: formData.get("title"),
    tags: (formData.get("keywords") as string).split(","),
  });
  await writeTopics(data);
  redirect("/new?category=Custom", RedirectType.push);
}

export async function removeTopic(id: number) {
  let data = require("../../../topics.json") as { topics: Topic[] };
  data["topics"] = data["topics"].filter((t) => t.id !== id);
  await writeTopics(data);
  redirect("/new", RedirectType.push);
}
