import { ScrollView, View, Text } from 'react-native';
import styled, {css} from "styled-components/native";

export type FlagStyleProps = 'INTO' | 'OUT';

type Props = {
  diet: FlagStyleProps;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_100};
`

export const Section = styled(ScrollView).attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`  
  flex: 1;
  height: 100px;
  width: 100%;
  padding: 24px;
  
  background-color: ${({theme}) => theme.COLORS.WHITE_100};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

export const Meal = styled.View`
`

export const Separator = styled.View`
  margin: 80px 0;
`

export const Name = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.LLG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Description = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 24px;
` 

export const Date = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const DateText = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 24px;
` 

export const Flag = styled(View)<Props>`
  width: 144px;
  border: 1px solid transparent;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: ${({theme, diet}) => diet === 'INTO' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
`

export const Tag = styled(Text)<Props>`
  ${({theme, diet}) => css`
    color: ${diet === 'INTO' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `} 
`

