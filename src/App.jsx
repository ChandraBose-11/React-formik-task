import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Book from './Pages/Book';
import EditBook from './Pages/EditBook';
import CreateBook from './Pages/CreateBook';
import Dashboard from './Components/DashBoard/Dashboard';
import Author from './Pages/Author';
import CreateAuthor from './Pages/CreateAuthor';
import EditAuthor from './Pages/EditAuthor';

const App = () => {
  const[id,setid]=useState(0)
  const[ID,SetId]=useState(0)
  return (
    <div>
      <BrowserRouter>
      <div>
        <Dashboard/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book' element={<Book setid={setid}/>}/>
        <Route path='/bookedit/:id' element={<EditBook id={id}/>}/>
        <Route path='/createbook' element={<CreateBook/>}/>
        <Route path='/author' element={<Author SetId={SetId}/>}/>
        <Route path='/createauthor' element={<CreateAuthor/>}/>
        <Route path='/authoredit/:id' element={<EditAuthor ID={ID}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;