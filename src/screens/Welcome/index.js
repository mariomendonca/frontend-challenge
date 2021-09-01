import React from 'react'
import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Input from '../../components/Input'
// import { Container } from '../../styles/Global'
import { ButtonText, Content, NextButton, WelcomeText, Container } from './styles'

export default function Welcome() {
  const [name, setName] = useState('')

  const { navigate } = useNavigation()

  async function handleNavigate() {
    if (name) {
      await AsyncStorage.setItem('ubook-username', name)
      navigate('home')
    } else {
      Alert.alert('Please, enter your name!')
    }
  }

  return (
    <Container>
      <Content>
        <WelcomeText>
          Welcome to UBook
        </WelcomeText>
        <Input
          placeholder='Whats your name?'
          state={name}
          setState={setName}
          icon='user'
        />
        <NextButton onPress={handleNavigate}>
          <ButtonText>
            Confirm
          </ButtonText>
        </NextButton>
      </Content>
    </Container>
  )
}
