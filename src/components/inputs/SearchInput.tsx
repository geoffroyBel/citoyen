import React from "react";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "../icons/SearchIcon";

export default function SearchInput({ 
    label, 
    placeholder 
}: { 
    label: string, 
    placeholder: string 
}): JSX.Element {
    return (
    <div className="rounded-2xl flex justify-center items-center text-white shadow-lg">
      <Input
        label={label}
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-neutral-900 dark:text-neutral-200",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder={placeholder}
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
    </div>
  );
}
