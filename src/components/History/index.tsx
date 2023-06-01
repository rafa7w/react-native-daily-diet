import { Container } from "./styles";

export function History() {
  return (
    <Container>
      
    </Container>
  )
}

/*
<SectionList 
      sections={exercises }
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <HistoryCard data={item}/>
      )}
      renderSectionHeader={({section}) => (
        <Heading color='gray.100' fontSize='md' mt={10} mb={3} fontFamily='heading'>
          {section.title}
        </Heading>
      )}
      px={8}
      contentContainerStyle={exercises.length == 0 && {flex: 1, justifyContent: 'center'}} 
      ListEmptyComponent={() => (
        <Text color='gray.100' textAlign='center'>
          Não há exercícios registrados ainda. {'\n'}
          Vamos fazer exercícios hoje?
        </Text>
      )}
      showsVerticalScrollIndicator={false}
    />

*/