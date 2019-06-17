import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './Components/TodoList';

//TODO: Need to add Bootstrap and add some styling

const destination = document.querySelector('#container');

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);