import styled from "styled-components/native";
import { colors } from "./Theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const PageContainer = styled.View`
  flex: 1;
  background: ${colors.background};
  padding-top: ${Platform.OS == 'android' ? '25px' : getStatusBarHeight()};
`

export const PageContent = styled.View`
  padding: 0 20px;
  flex: 1;
  align-items: center;
  padding-top: 10px;
`
