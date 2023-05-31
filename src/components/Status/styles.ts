import styled, {css} from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Subtitle = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_500};
  `}
`