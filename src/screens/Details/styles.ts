import { View, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'

export type BackIconProps = 'INTO' | 'OUT';

type Props = {
  type: BackIconProps;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE_100};
  `

export const Header = styled(View).attrs<Props>(({theme, type}) => ({
  backgroundColor: type === 'INTO' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100
}))`
  padding: 24px;
  height: 170px;
  position: relative;
  align-items: center;
  justify-content: center;
`

export const BackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 36px;
  left: 22px;
`

export const Icon = styled(Feather).attrs<Props>(({theme, type}) => ({
  size: 24,
  color: type === 'INTO' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700
}))``

