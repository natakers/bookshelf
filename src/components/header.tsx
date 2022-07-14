import { Button, Container, Grid, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import React, { useEffect, useState } from "react"
import { books } from "../data"
import { IBook } from "../interfaces";

const Header = () =>  {
  const [choosenAuthor, setAuthor] = useState('');
  const [isAuthor, setIsAuthor] = useState(false);
  const [isBook, setIsBook] = useState(false);
  const [choosenBooks, setBooks] = useState<IBook[]>([]);
  const [choosenBook, setBook] = useState('');
  const handlerSelectAuthor = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setAuthor(event.target.value);
  }
  const handlerSelectBook = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setBook(event.target.value);
}
  useEffect(() => {
    books.forEach((el) => {
      if(el.author === choosenAuthor) {
        setBooks(el.books)
}
    })
    if (choosenAuthor !== '') {
      setIsAuthor(true)
    } 
    if (choosenBook !== '') {
      setIsAuthor(false)
      setIsBook(true)
    }
  }, [choosenAuthor, choosenBook])
  return (
    <Container >
    <Stack direction="row" spacing={2} alignItems="center">
    <Stack spacing={5}>
      <Stack spacing={5}></Stack>
      <Stack direction="row" spacing={5}>
        <InputLabel id="demo-simple-select-label1">Author</InputLabel>
        <Select
          sx={{ m: 1, minWidth: 120 }}
          labelId="demo-simple-select-helper-label1"
          id="demo-simple-select-helper1"
          value={choosenAuthor}
          label="Author"
          onChange={handlerSelectAuthor}
        >
        <option value=''></option>
        {books &&
          books.map((el) => (
            <MenuItem key={el.author} value={el.author}>{el.author}</MenuItem>
          ))}         
        </Select>
        <InputLabel id="demo-simple-select-label">Book</InputLabel>
        <Select
        sx={{ m: 1, minWidth: 120 }}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={choosenBook}
          label="Book"
          onChange={handlerSelectBook}
        >
        <option value=''></option>
        { choosenBooks.map((el) => (
            <MenuItem key={el.name} value={el.name}>{el.name}</MenuItem> ))} 
        </Select>
      </Stack>
      <Button variant="contained" size="medium" href={`/book/${choosenAuthor}/${choosenBook}`}>Find</Button>
    </Stack>
    <Stack spacing={2}>
      <Button variant="contained" size="medium" onClick={() => {alert('clicked')}}>Add</Button>
    </Stack>
    </Stack>
    </Container>
  )
}

export default Header