import styled, {css} from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE_100};
  justify-content: center;
  padding: 24px;
`

export const SuccessMessageTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GREEN_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  align-self: center;
  margin-top: 60px;
`
export const SuccessMessage = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  align-self: center;
  margin-bottom: 40px;
`

export const FailureMessageTitle = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.RED_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  align-self: center;
  margin-top: 60px;
`

export const FailureMessage = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  align-self: center;
  margin-bottom: 40px;
`

export const Figure = styled.Image`
  align-self: center;
  margin-bottom: 32px;
`

