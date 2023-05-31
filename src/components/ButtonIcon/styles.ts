import { TouchableOpacity } from 'react-native'
import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
`

export const Arrow = styled(ArrowUpRight).attrs(({theme}) => ({
  size: 26,
  color: theme.COLORS.GREEN_700,
}))``