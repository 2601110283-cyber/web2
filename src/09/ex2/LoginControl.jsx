import React, {useState} from "react";
import LogoutButton from "./LogoutButton";
import LogInButton from "./LoginButton"; // 대문자 I로 수정
import Greeting from "../ex1/Greeting"; // 경로 정상 (../ex1/Greeting)
import './Loginout.css'; // CSS 파일명 Loginout.css로 수정

function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => {
        setIsLoggedIn(true);
    }

    const logOutClickListener = () => {
        setIsLoggedIn(false);
    }

    let button;

    if(isLoggedIn){
        button = <LogoutButton onClick={logOutClickListener}/>
    } else {
        button = <LogInButton onClick={logInClickListener} /> // 대문자 I로 수정
    }

    return(
        <div className="app-wrapper">
            <div className="login-container">
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        </div>
    );
}
export default LoginControl;