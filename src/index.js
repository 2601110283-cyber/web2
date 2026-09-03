import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import TodoList from "./01/TodoApp";
 import Library from "./03/ENHENCED_css/Library";
 import "./03/ENHENCED_css/Book.css";
// import Clock from "./04/Clock";
// import "./04/Clock.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
        root.render(
            <React.StrictMode>
                <Library />
            </React.StrictMode>
        );
    },1000
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
