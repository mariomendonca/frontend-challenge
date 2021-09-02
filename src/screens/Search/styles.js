import styled from "styled-components/native"
import { colors, fonts } from "../../styles/Theme"
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  background: ${colors.background};
  flex: 1;
  padding-top: ${Platform.OS == 'android' ? '25px' : getStatusBarHeight()};
`

export const Content = styled.View`
  flex: 1;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  padding: 40px 24px 0 24px;
  /* padding: 40px 20px 0 20px; */
`

export const BooksContainer = styled.View`
  margin-top: 30px;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const List = styled.FlatList``