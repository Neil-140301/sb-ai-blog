import React, { ReactNode } from "react";
import { IconType } from "react-icons";

export default function ActionCard({
  Icon,
  label,
  options,
  selectedOption,
  setSelectedOption,
  children,
}: ActionCardProps) {
  return (
    <div className={"space-y-3 rounded-lg border p-2"}>
      <div className={"flex items-center gap-2"}>
        <Icon />
        <span className={"text-sm"}>{label}</span>
      </div>
      {options && (
        <div className={"flex flex-wrap gap-2"}>
          {options?.map((option) => (
            <span
              onClick={() =>
                setSelectedOption ? setSelectedOption(option) : null
              }
              key={option}
              className={`cursor-pointer rounded-lg  px-3 py-1 text-xs ${
                selectedOption === option
                  ? "bg-blue-600 text-white"
                  : "border border-blue-400 text-blue-600"
              }`}
            >
              {option}
            </span>
          ))}
        </div>
      )}

      {children}
    </div>
  );
}

type ActionCardProps = {
  Icon: IconType;
  label: string;
  options?: string[];
  selectedOption?: string;
  setSelectedOption?: (k: string) => void;
  children?: ReactNode;
};
