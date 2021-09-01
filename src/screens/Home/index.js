import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native'

import { 
  Container,
  Content,
  MessageText,
  NameText,
  Title,
  Section,
  TitleArea,
  SeeMore
} from './styles';

import Input from '../../components/Input';
import { Card } from '../../components/BookCard/styles';

export default function Home() {
  const [name, setName] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function getName() {
      const username = await AsyncStorage.getItem('ubook-username')
      setName(username)
    }

    getName()
  }, [])

  return (
    <Container>
      <Content>
        <Input 
          placeholder='Search book'
          icon='search'
          state={search}
          setState={setSearch}
        />
        <MessageText>
          Hi, <NameText>{name}</NameText> 👋
        </MessageText>

        <Section>
          <TitleArea>
            <Title>
              Discover new book
            </Title>

            <TouchableOpacity>
              <SeeMore>
                More
              </SeeMore>
            </TouchableOpacity>
          </TitleArea>
          <Card />
        </Section>

        <Section>
          <TitleArea>
            <Title>
              Currently Reading
            </Title>

            <TouchableOpacity>
              <SeeMore>
                All
              </SeeMore>
            </TouchableOpacity>
          </TitleArea>
          <Card />
        </Section>

        <Section>
          <TitleArea>
            <Title>
              Reviews of the days
            </Title>

            <TouchableOpacity>
              <SeeMore>
                All videos
              </SeeMore>
            </TouchableOpacity>
          </TitleArea>
          <Card />
        </Section>

      </Content>
    </Container>
  )
}