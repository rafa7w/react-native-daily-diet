import { TouchableOpacityProps } from 'react-native';
import { Container, Title, OptionStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  type?: OptionStyleProps;
  title: string;
}

export function Filter({ title, type = 'DEFAULT', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}