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
  justify-content: space-between;
`

export const Logo = styled.Image`
`

export const User = styled(UserCircle).attrs(({theme}) => ({
  size: 40,
  color: theme.COLORS.GRAY_500,
}))``

export const Card = styled.View`
  width: 100%;
  height: 102px;
  border-radius: 8px;
  margin-top: 33px;
  background-color: ${({theme}) => theme.COLORS.GREEN_100};
  position: relative;
  justify-content: center;
  align-items: center;
`

