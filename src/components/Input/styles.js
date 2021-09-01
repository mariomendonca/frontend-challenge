import styled from "styled-components/native"
import { colors } from "../../styles/Theme"

export const InputContainer = styled.View`
  width: 100%;
  height: 48px;
  background: ${colors.white};
  padding: 0 20px;
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  `
export const InputText = styled.TextInput`
  font-size: 18px;
  margin-left: 20px;
  height: 100%;
  flex: 1;
`