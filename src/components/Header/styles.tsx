import { TouchableOpacity } from 'react-native';
import styled, {css} from "styled-components/native";
import { Feather } from '@expo/vector-icons'

export type BackIconStyleProps = 'DEFAULT' | 'INTO' | 'OUT';

type Props = {
  type: BackIconStyleProps;
}

export const Container = styled.View`
  height: 104px;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const BackIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 38px;
  left: 20px; 
  padding: 2px;
`

export const Icon = styled(Feather).attrs<Props>(({theme, type}) => ({
  size: 24,
  color: type === 'INTO' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700,
}))`
  color: ${({theme}) => theme.COLORS.GRAY_500};
`

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`