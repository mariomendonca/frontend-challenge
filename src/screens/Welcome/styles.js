import styled from "styled-components/native";
import { colors, fonts } from "../../styles/Theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
  padding-top: ${Platform.OS == 'android' ? '25px' : getStatusBarHeight()};
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`

export const WelcomeText = styled.Text`
  font-family: ${fonts.bold};
  font-size: 30px;
  color: ${colors.heading};
  margin-bottom: 30px;
`

export const NextButton = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  background: ${colors.heading};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border-radius: 10px;
`

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  font-family: ${fonts.medium};
`