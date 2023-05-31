import styled from "styled-components/native";
import { UserCircle } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  margin-top: 24px;
  background-color: ${({theme}) => theme.COLORS.WHITE_100};
`

export const Header = styled.View`
  flex-direction: row;
`

export const Logo = styled.Image`
`

export const User = styled(UserCircle).attrs(({theme}) => ({
  size: 40,
  color: theme.COLORS.GRAY_500
}))``