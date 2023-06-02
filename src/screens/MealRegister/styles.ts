import { ScrollView } from 'react-native';
import styled, {css} from "styled-components/native";

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

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 4px;
`

export const VerticalContainer = styled.View`
  flex-direction: column;
`

export const HorizontalContainer = styled.View`
  flex-direction: row;
`
