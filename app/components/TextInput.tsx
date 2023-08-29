import { styled } from "styled-components";

interface TextInputProps {
  id: string;
  label: string;
  name: string;
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
  ...rest
}: TextInputProps) {
  return (
    <InputLabel>
      {label}
      <InputField id={id} type="text" name={name} {...rest} />
    </InputLabel>
  );
}
