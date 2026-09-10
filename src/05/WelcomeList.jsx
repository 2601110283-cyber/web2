import React from "react";
import Welcome from "./Welcome";
import "./Welcome.css";

function WelcomeList(){
    return(
        // div에 className을 추가하고, 불필요한 <br/>은 지웠습니다.
        <div className="welcome-list-container">
            <Welcome name="김인공"/>
            <Welcome name="박폴리"/>
            <Welcome name="이정수"/>
        </div>
    );
}

export default WelcomeList;