import { Container, Header, Logo, User } from "./styles"
import logoImg from '@assets/logo.png'
import { Text } from 'react-native'

export function Home() {
  return (
    <Container>
      <Header>
        <Logo 
          source={logoImg}
        />
        <User />
      </Header>
    </Container>
  )
}