import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBooks from "./pages/CreateBooks";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ShowBooks from "./pages/ShowBooks";
import Loged from "./pages/Loged";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Loged" element={<Loged/>}/>
      <Route path="/Home" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
