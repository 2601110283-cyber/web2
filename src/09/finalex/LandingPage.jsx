import React, {useState} from "react";
import Toolbar from "./Toolbar";
import sky2Img from "./images.jpg";
import './LandingPage.css';

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginClick = () => {
        setIsLoggedIn(true);
    }

    const logoutClick = () => {
        setIsLoggedIn(false);
    }

    return(
        // 1. 전체를 감싸는 div에 landing-wrapper 연결
        <div className="landing-wrapper">

            <Toolbar isLoggedIn={isLoggedIn} loginClick={loginClick} logoutClick={logoutClick}/>

            {/* 2. 내용을 감싸는 div에 content-card 연결 */}
            <div className="content-card">
                {/* 3. 텍스트에 content-text 연결 */}
                <div className="content-text">
                    9장 조건부 렌더링 실습 화면입니다.
                </div>

                {/* 4. 이미지에 practice-image 연결 (<br/>은 삭제해도 됩니다) */}
                <img className="practice-image" src={sky2Img} width={200} alt="실습 이미지" />
            </div>

        </div>
    );
}

export default LandingPage;