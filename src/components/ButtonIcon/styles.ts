import { TouchableOpacity } from 'react-native'
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonIconTypeStyleProps;
}
 
export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
`

export const Icon = styled(Feather).attrs<Props>(({theme, type}) => ({
  size: 26,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700
}))``