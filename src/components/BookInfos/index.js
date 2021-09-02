import React from 'react'

import {
  Container,
  BookCover,
  TextContainer,
  TextInfo
} from './styles'

export default function BookInfos({ uri, title, author }) {
  return (
    <Container>
      <BookCover source={{ uri: `${uri}.png` }} />
      <TextContainer>
        <TextInfo size={14}>{title}</TextInfo>
        <TextInfo size={12}>{author}</TextInfo>
      </TextContainer>
    </Container>
  )
}