import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from '../pages/Login';
import Home from '../pages/Home';
import TodoList from '../pages/TodoList';
import AddUser from '../pages/AddUser';

function Roteamento(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/AddUser' element={<AddUser />} />
                    <Route path='/TodoList' element={<TodoList />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Roteamento;