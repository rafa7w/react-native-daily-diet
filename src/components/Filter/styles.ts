import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type OptionStyleProps = 'DEFAULT' | 'SIM' | 'NAO';

type Props = {
  type?: OptionStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({theme, type}) => type === 'SIM' ? theme.COLORS.GREEN_100 : type === 'NAO' ? theme.COLORS.RED_100 : theme.COLORS.GRAY_TINY};
  border-color: ${({theme, type}) => type === 'SIM' ? theme.COLORS.GREEN_300 : type === 'NAO' ? theme.COLORS.RED_300 : theme.COLORS.GRAY_TINY};
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  margin-right: 8px;

  height: 50px;
  width: 150px;

  align-items: center;
  justify-content: center;
` 

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`