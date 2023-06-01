import styled, {css} from "styled-components/native";

export type StatisticStyleCardProps = 'BIG' | 'SMALL'

type Props = {
  type: StatisticStyleCardProps;
}

export const ColumnContainer = styled.View`
  padding: 24px;
`

export const Card = styled.View`
  width: 100%;
  height: 89px;
  margin-bottom: 12px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.GRAY_TINY};
`

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
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

export const HorizontalContainer = styled.View`
  flex-direction: row;
`


export const PositiveStatistic = styled.View`
  width: 153px;
  height: 89px;
  border-radius: 8px;
  margin-right: 4px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.GREEN_100};
`

export const NegativeStatistic = styled.View`
  width: 153px;
  height: 89px;
  margin-left: 4px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.RED_100};
`