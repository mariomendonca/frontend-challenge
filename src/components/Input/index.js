import React from 'react'
import { InputContainer, InputText } from './styles'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../styles/Theme'
import { TouchableOpacity } from 'react-native'

export default function Input({ icon, placeholder, state, setState, press }) {
  return (
    <InputContainer>
      {press ? 
        (
        <TouchableOpacity onPress={press}>
          <Feather name={icon} color={colors.text} size={24}/>
        </TouchableOpacity>
        ) : (
          <Feather name={icon} color={colors.text} size={24}/>
        )
      }
      <InputText
        autoCapitalize='none'
        placeholder={placeholder}
        onChangeText={setState}
        value={state}
      />
    </InputContainer>
  )
}