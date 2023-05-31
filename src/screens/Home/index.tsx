import { Card, Container, Header, Logo, User } from "./styles"

import { Text } from 'react-native'
import { useTheme } from "styled-components/native"

import logoImg from '@assets/logo.png'

import { ButtonIcon } from "@components/ButtonIcon"
import { Status } from "@components/Status"
import { Button } from "@components/Button"

export function Home() {
  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme()

  return (
    <Container>
      <Header> 
        <Logo 
          source={logoImg}
        />
        <User />
      </Header>

      <Card>
        <Status />
        <ButtonIcon 
          icon="arrow-up-right"
        />
      </Card>

      <Text style={{marginTop: 40, fontSize: FONT_SIZE.MD, color: COLORS.GRAY_700, fontFamily: FONT_FAMILY.REGULAR}}>
        Refeições
      </Text>

      <Button 
        icon="plus"
        title="Nova refeição"
      />

    </Container>
  )
}