import { TextInput, TouchableOpacity } from 'react-native';
import styled, {css} from "styled-components/native";

export type InputStyleProps = 'LARGE' | 'SMALL';
export type FilterStyleProps = {
  isActive?: boolean;
}

type Props = {
  type: InputStyleProps;
}


export const Container = styled(TextInput).attrs<Props>(({theme, type}) => ({
  fontSize: theme.FONT_SIZE.MD,
  color: theme.COLORS.GRAY_700,
  width: type === 'LARGE' ? '100%' : 150,
}))`
  margin-bottom: 14px;
  border-radius: 6px;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_100};
  padding: 18px;
`
