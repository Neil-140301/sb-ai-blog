import Tabs from "@/components/Tabs";
import { PageProps } from "../utils/types";
import { fetchCategories, fetchTopics } from "../utils/data";
import Link from "next/link";
import Keywords from "@/components/Keywords";
import AddTopic from "@/components/AddTopic";
import { removeTopic } from "@/app/utils/actions";

export default async function Topics({ searchParams }: PageProps) {
  const categories = await fetchCategories();
  const currentCategory =
    categories.find((cat) => cat.name === searchParams["category"])?.name ??
    "All";
  const topics = await fetchTopics(currentCategory);

  return (
    <div className="flex flex-col gap-5 p-10 pt-6">
      <h1 className="text-2xl font-semibold text-gray-600">Categories</h1>

      <div className="flex items-center justify-between">
        {/* tabs */}
        <Tabs
          active={currentCategory}
          tabs={categories.map((cat) => cat.name)}
        />
        <AddTopic />
      </div>

      {/* topics */}
      <div className="no-scroll mx-auto max-h-[26rem] w-[96%] overflow-y-auto rounded-lg shadow">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-slate-100">
              <th>Recommended Topics</th>
            </tr>
          </thead>

          {/* body */}
          <tbody>
            {topics.map((topic) => (
              <tr key={currentCategory + topic.id}>
                <td>
                  <div className="group flex items-center ">
                    <div className="flex flex-1 flex-col gap-3">
                      <h2 className="font-medium">{topic.title}</h2>
                      <Keywords topicId={topic.id} keywords={topic.tags} />
                    </div>
                    <Link
                      className={"hidden group-hover:mx-4 group-hover:block"}
                      href={`/new/editor/${topic.id}`}
                    >
                      <span className="btn-warning btn-sm btn">Write</span>
                    </Link>

                    <form
                      action={async () => {
                        "use server";
                        await removeTopic(topic.id);
                      }}
                      className={"hidden group-hover:block"}
                    >
                      <button className="btn-error btn-sm btn">Delete</button>
                    </form>

                    <div className="" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
