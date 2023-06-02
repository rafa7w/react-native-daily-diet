import { StatusBar } from 'react-native';
import { Container, Figure, SuccessMessageTitle, SuccessMessage, FailureMessageTitle, FailureMessage } from "./styles";
import { useTheme } from 'styled-components/native';

import SuccessImage from '@assets/intoDiet.png'
import FailureImage from '@assets/outDiet.png'

import { Button } from "@components/Button";

export function Feedback() {
  const { COLORS } = useTheme()

  return (
    <Container>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor={COLORS.WHITE_100}
        translucent
      />
      <SuccessMessageTitle>Continue assim!</SuccessMessageTitle>
      <SuccessMessage>Você continua dentro da dieta. Muito bom!</SuccessMessage>
      <Figure source={SuccessImage}/>
      <Button title="Ir para a página inicial"/>
    </Container>
  )
}