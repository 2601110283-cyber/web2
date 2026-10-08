import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import TodoList from "./01/TodoApp";
//  import Library from "./03/ENHENCED_css/Library";
//  import "./03/ENHENCED_css/Book.css";
// import Clock from "./04/Clock";
// import "./04/Clock.css"
// import ConfirmDialog from "./04/ConfirmDialog";
//import ConfirmDialogList from "./04/ConfirmDialogList";
//import WelcomeList from "./05/exam01/WelcomeList";
//import BookList from "./05/exam02/BookList";
//import UserinfoList from "./05/exam03/UserinfoList";
import Notification from "./06/NotificationList";
//import NotificationList from "./06/NotificationList";
//import TextInputWithFocusButton from "./07/TextInputwithFocusButton";
import Accommodate from "./07/02/Accommodate";

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
        root.render(
            <React.StrictMode>
                <Accommodate/>
            </React.StrictMode>
        );
    },1000
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
