import styled from "styled-components/native"
import { colors, fonts } from "../../styles/Theme"
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  background: ${colors.background};
  flex: 1;
  padding-top: ${Platform.OS == 'android' ? '25px' : getStatusBarHeight()};
`

export const Content = styled.ScrollView`
  flex: 1;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  padding: 40px 24px 0 24px;
  /* padding: 40px 20px 0 20px; */
`

export const MessageText = styled.Text`
  margin-top: 40px;
  font-size: 24px;
  font-family: ${fonts.regular};
  color: ${colors.text};
  `

export const NameText = styled.Text`
  font-family: ${fonts.medium};
  color: ${colors.heading};
`

export const Section = styled.View`
  margin-top: 50px;
  width: 100%;
`

export const TitleArea = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  font-family: ${fonts.medium};
  font-size: 18px;
  color: ${colors.title};
`

export const SeeMore = styled.Text`
  font-family: ${fonts.regular};
  font-size: 14px;
  color: ${colors.blue};
`