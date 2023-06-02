import { BackIconStyleProps, BackIcon, Container, Icon, Title } from "./styles";
import { Feather } from '@expo/vector-icons';

type Props = {
  icon: keyof typeof Feather.glyphMap;
  title: string;
  type?: BackIconStyleProps;
}

export function Header({icon, title, type = 'DEFAULT'} : Props) {
  return (
    <Container>
      <BackIcon>
        <Icon 
          name={icon}
          type={type}
        />
      </BackIcon>
      <Title>{title}</Title>
    </Container>
  )
}