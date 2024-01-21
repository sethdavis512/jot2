import type { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputLabel = styled("label")`
  display: block;
`;

const InputField = styled("input")`
  display: block;
`;

export default function TextInput({
  id,
  label,
  name,
  defaultValue,
  value,
  ...rest
}: TextInputProps) {
  return label ? (
    <InputLabel>
      {label}
      <InputField
        id={id}
        type="text"
        name={name}
        value={value}
        defaultValue={defaultValue}
        {...rest}
      />
    </InputLabel>
  ) : (
    <InputField
      id={id}
      type="text"
      name={name}
      value={value}
      defaultValue={defaultValue}
      {...rest}
    />
  );
}
