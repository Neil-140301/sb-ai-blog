"use client";

import { useRef } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { addTopic } from "@/app/utils/actions";

export default function AddTopic() {
  const formDialog = useRef<HTMLDialogElement>(null);

  function FormDialog() {
    return (
      <dialog ref={formDialog} className="modal">
        <form
          // action={addTopic}
          className="modal-box space-y-5"
        >
          <h3 className="text-lg font-bold">New Topic</h3>
          <div className={"form-control"}>
            <label htmlFor="title" className={"label"}>
              <span className={"label-text font-medium text-slate-600"}>
                Title
              </span>
            </label>
            <input
              className={"input border-slate-300 focus:outline-none"}
              type="text"
              name={"title"}
              id={"title"}
            />
          </div>
          <div className={"form-control"}>
            <label htmlFor="keywords" className={"label"}>
              <span className={"label-text font-medium text-slate-600"}>
                Keywords
              </span>
            </label>
            <input
              className={"input border-slate-300 focus:outline-none"}
              placeholder={"design, small business, digital marketing, etc..."}
              type="text"
              name={"keywords"}
              id={"keywords"}
            />
          </div>
          <div className={"modal-action"}>
            <button
              formAction={addTopic}
              className={"btn-primary btn-outline btn-sm btn mt-3 w-full"}
            >
              Add
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    );
  }

  const toggleModal = () => {
    if (formDialog.current) {
      formDialog.current.showModal();
    }
  };

  return (
    <>
      <FormDialog />
      <button
        onClick={toggleModal}
        className="text-s flex items-center gap-1 rounded-sm bg-orange-500 px-4 py-2 font-semibold text-white"
      >
        <p>Add Topic</p>
        <AiOutlineRight className="text-lg" />
      </button>
    </>
  );
}
