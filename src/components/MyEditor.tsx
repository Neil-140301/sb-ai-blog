"use client";

import React, {useRef, useState} from "react";
import {Editor} from "@tinymce/tinymce-react";
import {BsCreditCard2Front, BsImage, BsLayoutTextSidebarReverse,} from "react-icons/bs";
import {Topic} from "@/app/utils/types";
import ActionCard from "@/components/ActionCard";
import {MdOutlineRecordVoiceOver} from "react-icons/md";
import {generateBlog, generateImage, length, tones} from "@/app/utils/data";
import {useRouter} from "next/navigation"; // import tinymce from "tinymce";
// import tinymce from "tinymce";

export default function MyEditor({ topic }: MyEditorProps) {
  const INITIAL_VALUE = `<h1>${topic.title}</h1> `;

  const [text, setText] = useState(INITIAL_VALUE);
  const [tone, setTone] = useState(tones[0]);
  const [blogLength, setBlogLength] = useState(length[0]);
  const editorRef = useRef<Editor>(null);
  const router = useRouter();

  return (
    <>
      {/* editor */}
      <form className="no-scroll flex-[4.5] overflow-auto p-5">
        <Editor
          ref={editorRef}
          tinymceScriptSrc={"/tinymce/tinymce.min.js"}
          initialValue={text}
          init={{
            height: 400,
            plugins: "image link save code preview wordcount",
            toolbar:
              "undo redo | blocks | image link code | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | preview | save ",
            file_picker_types: "media image",
            file_picker_callback: (cb, value, meta) => {
              const input = document.createElement("input");
              input.setAttribute("type", "file");
              input.setAttribute("accept", "image/*");

              input.addEventListener("change", (e) => {
                // @ts-ignore
                const file = e.target!.files[0];

                const reader = new FileReader();
                reader.addEventListener("load", () => {
                  const id = "blobid" + new Date().getTime();
                  // @ts-ignore
                  const blobCache = tinymce.activeEditor.editorUpload.blobCache;
                  // @ts-ignore
                  const base64 = reader.result!.split(",")[1];
                  const blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);

                  /* call the callback and populate the Title field with the file name */
                  cb(blobInfo.blobUri(), { title: file.name });
                });
                reader.readAsDataURL(file);
              });

              input.click();
            },
            save_onsavecallback: () => {
              console.log(editorRef.current?.editor?.getContent());
              setTimeout(() => {
                router.replace("/");
              }, 1500);
            },
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </form>
      <div className="flex flex-[1.5] flex-col bg-gray-50  px-6 py-3">
        <div className="flex items-center gap-3">
          <BsCreditCard2Front className="text-xl" />
          <h1 className="text-lg font-semibold">Compose</h1>
        </div>
        <div className="divider my-0"></div>
        {/*  actions */}
        <div
          className={"no-scroll flex h-[36rem] flex-col gap-4 overflow-auto"}
        >
          <div
            className={
              "space-y-3 rounded-lg border border-slate-200 bg-white p-4 shadow "
            }
          >
            <ActionCard
              Icon={MdOutlineRecordVoiceOver}
              label={"Tone"}
              options={tones}
              selectedOption={tone}
              setSelectedOption={setTone}
            />
            <ActionCard
              Icon={BsLayoutTextSidebarReverse}
              label={"Length"}
              options={length}
              selectedOption={blogLength}
              setSelectedOption={setBlogLength}
            />

            <button
              className={
                "w-full rounded-full bg-blue-600 px-6 py-1 text-sm font-semibold text-white "
              }
              onClick={() => {
                if (editorRef.current) {
                  editorRef.current.editor?.setContent(
                    editorRef.current.editor?.getContent() + generateBlog()
                  );
                }
              }}
            >
              Generate Draft
            </button>
          </div>

          <div
            className={
              "space-y-3 rounded-lg border border-slate-200 bg-white p-4 shadow "
            }
          >
            <ActionCard Icon={BsImage} label={"Image"}>
              <textarea
                placeholder={"Enter a prompt..."}
                className={
                  "textarea-bordered textarea w-full focus:outline-none"
                }
              ></textarea>
            </ActionCard>

            <button
              className={
                "w-full rounded-full border-2 border-blue-600 px-6 py-1 text-sm font-semibold text-blue-600"
              }
              onClick={() => {
                if (editorRef.current) {
                  editorRef.current.editor?.setContent(
                    editorRef.current.editor?.getContent() + generateImage()
                  );
                }
              }}
            >
              Generate Image
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

type MyEditorProps = {
  topic: Topic;
};
