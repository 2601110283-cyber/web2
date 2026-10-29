import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

function Greeting(props) { // props 매개변수 추가
    //const isLoggedIn = true
    const isLoggedIn = props.isLoggedIn; // 이전 코드의 prop 이름과 일치시키기 위해 수정

    if(isLoggedIn){
        return <UserGreeting/>;
    } else {
        return <GuestGreeting/>; // return 뒤의 잘못된 세미콜론(;) 제거
    }
}

export default Greeting;