import { StatusBar, ViewProps } from 'react-native';
import { Container, Description, Date, Meal, Name, Section, DateText, Flag, Tag, FlagStyleProps, Separator } from "./styles";
import { useTheme } from 'styled-components/native';
import { Header } from '@components/Header';
import { Button } from '@components/Button';


export function MealDetail() {
  const { COLORS } = useTheme()
  return (
    <Container>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor={COLORS.GRAY_100}
        translucent
      />
      <Header 
        type='OUT'
        icon='arrow-left'
        title='Refeição'
      />
      <Section>
        <Meal>
          <Name>Sanduíche</Name>
          <Description>
            Sanduíche de pão integral com atum e salada de alface e tomate.
          </Description>
          <Date>Data e hora</Date>
          <DateText>12/08/2022 às 16:00</DateText>
          <Flag diet='OUT'>
            <Tag diet='OUT'>dentro da dieta</Tag>
          </Flag>
        </Meal>
        <Separator />
        <Button 
          icon='edit-3'
          title='Editar refeição'
        />
        <Button 
          icon='trash-2'
          title='Excluir refeição'
          type='SECONDARY'
        />
      </Section>
    </Container>
  )
}