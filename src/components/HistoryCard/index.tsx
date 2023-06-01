import { TouchableOpacityProps } from 'react-native';
import { Container, Description, Hour, Icon, IntoDietProps } from "./styles";
import { Feather } from '@expo/vector-icons';
import { HistoryDTO } from 'src/dtos/HistoryDTO';

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap;
  type?: IntoDietProps;
}

export function HistoryCard({icon, type = 'INTO'}: Props) {
  return (
    <Container>
      <Hour>20:00</Hour>
      <Description numberOfLines={1}>
        Whey protein com leite
      </Description>
      <Icon  
        name={icon}
        type={type}
      />
    </Container>
  )
}