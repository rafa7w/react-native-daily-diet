import { TouchableOpacity, Text } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

export type ButtonTypeStyleProps = 'PRIMARY'| 'SECONDARY';

type Props = {
	type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
	background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_500 : 'transparent' };
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  flex-direction: row;
  margin-top: 8px;
`;

export const Icon = styled(Feather).attrs<Props>(({theme, type}) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700
}))`
  margin-right: 12px;
`

export const Title = styled(Text)<Props>`
  color: ${({theme, type}) => type === 'PRIMARY' ? '#FFF': '#1B1D1E' };
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`