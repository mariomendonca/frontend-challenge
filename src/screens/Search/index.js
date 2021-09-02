import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Text, View } from 'react-native'
import BookInfos from '../../components/BookInfos'

import Input from '../../components/Input'

import {
  Container,
  Content,
  List,
  BooksContainer
} from './styles'

export default function Search({ route }) {
  const [search, setSearch] = useState(route.params.bookName)
  const [books, setBooks] = useState([])

  async function fetchBooks() {
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    setBooks(data['items'])
    // console.log(books['volumeInfo']['title'])
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <Container>
      {/* {console.log(books)} */}
      <Content>
        <Input
          setState={setSearch}
          state={search}
          icon='search'
          press={() => fetchBooks(search)}
        />
        <BooksContainer>
          <List
            data={books}
            numColumns={3}
            renderItem={({ item, index }) => (
              <BookInfos 
                key={index} 
                uri={item.volumeInfo.imageLinks.smallThumbnail}
                title={item.volumeInfo.title}
                author={item.volumeInfo.authors[0]}
              />
            )}
          />
        </BooksContainer>
      </Content>
    </Container>
  )
}