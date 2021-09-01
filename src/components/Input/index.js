import React from 'react'
import { InputContainer, InputText } from './styles'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../styles/Theme'

export default function Input({ icon, placeholder, state, setState }) {
  return (
    <InputContainer>
      <Feather name={icon} color={colors.text} size={24}/>
      <InputText
        autoCapitalize='none'
        placeholder={placeholder}
        onChangeText={setState}
        value={state}
      />
    </InputContainer>
  )
}