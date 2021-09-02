import styled from "styled-components/native";
import { colors, fonts } from "../../styles/Theme";


export const Container = styled.TouchableOpacity`
  width: 100px;
  height: 200px;
  margin-bottom: 20px;
  justify-content: space-between;
`

export const BookCover = styled.Image`
  width: 100%;
  height: 150px;
  /* width: 100%;
  height: auto; */
`

export const TextContainer = styled.View``

export const TextInfo = styled.Text`
  font-family: ${fonts.bold};
  font-size: ${({ size }) => size};
  color: ${colors.text};
  margin-top: 5px;
`