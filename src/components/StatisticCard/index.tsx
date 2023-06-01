import { ColumnContainer, Card, HorizontalContainer, NegativeStatistic, PositiveStatistic, Title, Subtitle } from "./styles";
import { useTheme } from "styled-components/native";

export function StatisticCard() {
  const { COLORS } = useTheme()

  return (
    <ColumnContainer>
      <Card>
        <Title>22</Title>
        <Subtitle>melhor sequência de pratos dentro da dieta</Subtitle>
      </Card>
      <Card>
        <Title>109</Title>
        <Subtitle>refeições registradas</Subtitle>
      </Card>

      <HorizontalContainer>
        <PositiveStatistic>
          <Title style={{color: COLORS.GREEN_700}}>99</Title>
          <Subtitle>dentro da dieta</Subtitle>
        </PositiveStatistic>

        <NegativeStatistic>
          <Title style={{color: COLORS.RED_700}}>10</Title>
          <Subtitle>fora da dieta</Subtitle>
        </NegativeStatistic>
      </HorizontalContainer>
    </ColumnContainer>
  )
}