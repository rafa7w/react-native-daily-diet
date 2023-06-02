import { TextInputProps } from "react-native";
import { Container, InputStyleProps } from "./styles";

type Props = TextInputProps & {
  width?: InputStyleProps;
}

export function Input({width = 'LARGE', ...rest}: Props) {
  return (
    <Container 
      {...rest}
      type={width}
    />
  )
}