"use server";

import { writeFileSync } from "fs";
import { Topic } from "@/app/utils/types";
import { revalidateTag } from "next/cache";
import prisma from "@/app/utils/prisma";

async function writeTopics(data: { topics: Topic[] }) {
  writeFileSync("topics.json", JSON.stringify(data, null, 2), "utf8");
  console.log("done");
}

export async function addTopic(formData: FormData) {
    await prisma.topic.create({
        data: {
            category: "Custom",
            title: formData.get("title") as string,
            tags: (formData.get("keywords") as string),
        }
    })
    // await writeTopics(data);
    revalidateTag("all_topics");
}

export async function removeTopic(id: number, path: string) {
    await prisma.topic.delete({
        where: {
            id: id
        }
    })
    revalidateTag("all_topics");
}
