import React from "react";
import { Textarea } from "@nextui-org/react";
import { useController } from "react-hook-form";

interface CustomTextFieldProps {
  name: string;
  control?: any;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  endIcon?: string;
  [key: string]: any;
}

const TextAreaField: React.FC<CustomTextFieldProps> = ({
  name,
  control,
  label,
  defaultValue,
  placeholder,
  endIcon,
  ...rest
}: CustomTextFieldProps) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: defaultValue || "",
  });
  return (
    <Textarea
      variant="bordered"
      label="Description"
      placeholder="Décrivez votre événement"
      {...field}
      isInvalid={!!error?.message}
      errorMessage={error?.message}
      {...rest}
      classNames={{
        label: "text-primary",
        input: [
          "bg-transparent",
          "text-gray-600",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "bg-page",
          //   "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:border-primary",
          //"dark:hover:bg-default/70",
          //"group-data-[focus=true]:bg-default-200/50",
          //"dark:group-data-[focus=true]:bg-default/60",
          "!cursor-text",
          "border-1",
          "border-primary",
        ],
      }}
    />
  );
};

export default TextAreaField;
