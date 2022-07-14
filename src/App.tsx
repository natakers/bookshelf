import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import BookList from './components/bookList';
import BookInfo from './components/bookIfo';
import Header from './components/header';
import EditBook from './components/editBook';
import CreateBook from './components/createBook';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Layout/>}></Route>
      <Route path='/book/:author' element={<BookList/>}></Route>
      <Route path='/book/:author/:book' element={<BookInfo/>}></Route>
      <Route path='/book/edit/:author/:book' element={<EditBook/>}></Route>
      <Route path='/book/new' element={<CreateBook/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
