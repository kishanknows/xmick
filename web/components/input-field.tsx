import { HTMLInputTypeAttribute } from "react";

export interface InputFieldProps {
  title: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
}

export const InputField = (props: InputFieldProps) => {
  return (
    <div>
      <p className="text-xs mt-5">{props.title}</p>
      <input
        className="bg-transparent min-w-full border-[0.5px] rounded border-gray-500 mt-1 p-2 text-xs"
        type={props.type}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};
