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
//import Accommodate from "./07/02/Accommodate";
//import Toggle from "./08/Toggle";
//import MyButton from "./08/MyButton";
//import Toggle2 from "./08/Toggle";
//import MyButton2 from "./08/1/MyButton2";
//import ConfirmButton from "./08/2/ConfirmButton";
//import Message from "./08/2/Message";
//import Greeting from "./09/ex1/Greeting";
//import LoginControl from "./09/ex2/LoginControl";
//import Mailbox from "./09/ex3/Mailbox";
//import LoginControl2 from "./09/ex3/LoginControl2";
//import MainPage from "./09/ex4/MainPage";
import LandingPage from "./09/finalex/LandingPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {
        root.render(
            <React.StrictMode>
                <LandingPage/>
            </React.StrictMode>
        );
    },1000
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
