import { StatusBar, TouchableOpacityProps, Text, ViewProps } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { Container, Header, Icon, BackIconProps, BackButton } from "./styles";
import { useTheme } from 'styled-components/native';
import { Status } from '@components/Status';
import { StatisticCard } from '@components/StatisticCard';

type Props = ViewProps & TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap;
  type?: BackIconProps;
}

export function Details({icon, type = 'INTO', ...rest}: Props) {
  const { COLORS, FONT_SIZE, FONT_FAMILY } = useTheme()

  return (
    <Container>
      <Header type={type} style={{marginTop: 8}}>
        <StatusBar 
          barStyle='dark-content'
          backgroundColor={type === 'INTO' ? COLORS.GREEN_100 : COLORS.RED_100}
          translucent
        />
        <BackButton>
          <Icon name={icon} type={type}/>
        </BackButton>
        <Status />
      </Header>
      
      <Text style={{fontFamily: FONT_FAMILY.BOLD, fontSize: FONT_SIZE.SM, color: COLORS.GRAY_700, marginTop: 20, textAlign: 'center'}}>
        Estatísticas gerais
      </Text>

      <StatisticCard />
    </Container>
  )
}