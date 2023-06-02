import { TouchableOpacityProps } from 'react-native';
import { Container, Title, ButtonTypeStyleProps, Icon } from './styles';
import { Feather } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  icon?: keyof typeof Feather.glyphMap;
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({icon, title, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Icon 
        name={icon}
        type={type}
      />
      <Title type={type}>{title}</Title>
    </Container>
  )
}