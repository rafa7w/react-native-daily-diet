import { TouchableOpacityProps } from 'react-native'
import { Icon, ButtonIconTypeStyleProps, Container } from "./styles";
import { Feather } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap; 
  type?: ButtonIconTypeStyleProps
} 

export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: Props) {
  return (
    <Container {...rest}>
      <Icon
        name={icon}
        type={type}
      />
    </Container>
  )
}