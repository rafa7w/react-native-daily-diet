import { TouchableOpacity } from 'react-native';
import styled, {css} from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export type IntoDietProps = 'INTO' | 'OUT';

type Props = {
  type: IntoDietProps;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgba(185, 187, 188, 0.3);
  margin-bottom: 6px;
  flex-direction: row;
  align-items: center;
`
export const Hour = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.LT}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-left: 12px;
  padding-right: 12px;
  border-right-width: 1px;
  border-right-color: ${({theme}) => theme.COLORS.GRAY_200}; 
`

export const Description = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_500};
  `}
  margin-left: 12px;
  flex: 1;
`

export const Icon = styled(Feather).attrs<Props>(({theme, type}) => ({
  size: 20,
  color: type === 'INTO' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300,
}))`
  margin-right: 16px;
`