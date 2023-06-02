import { useState } from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container, HorizontalContainer, Section, Title, VerticalContainer } from "./styles";

import { Header } from "@components/Header";
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { Button } from '@components/Button';

export function MealRegister() {
  const { COLORS } = useTheme()
  const [option, setOption] = useState('')
  return (
    <Container>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor={COLORS.GRAY_100}
        translucent
      />
      <Header 
        icon='arrow-left'
        title='Nova refeição'
      />
  
      <Section>
        <Title>Nome</Title>
        <Input maxLength={20}/>
        <Title>Descrição</Title>
        <Input multiline numberOfLines={4} maxLength={100}/>
        <HorizontalContainer>
          <VerticalContainer style={{marginRight: 8}}>
            <Title>Data</Title>
            <Input width='SMALL'maxLength={10}/>
          </VerticalContainer>
          <VerticalContainer >
            <Title>Hora</Title>
            <Input width='SMALL' maxLength={5}/>
          </VerticalContainer>
        </HorizontalContainer>
        <Title>Está dentro da dieta?</Title>
        <HorizontalContainer style={{paddingBottom: 50}}>
          <Filter 
            title='Sim'
            type='SIM'
          />
          <Filter 
            title='Não'
            type='NAO'
          />
        </HorizontalContainer>
        <Button 
          style={{marginTop: -10}}
          title='Cadastrar refeição'
        />
      </Section>
    </Container>
  )
}