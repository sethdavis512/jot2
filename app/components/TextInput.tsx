import { styled } from "styled-components";

const InputLabel = styled("label")`
  display: block;
`;

const InputField = styled("input")`
  display: block;
`;

export default function TextInput() {
  return (
    <InputLabel>
      {label}
      <InputField id={id} type="text" name={id} {...rest} />
    </InputLabel>
  );
}
