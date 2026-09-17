import React from "react";
import "./Welcome.css";

function Welcome(props){
    return(
        // 빈 태그 대신 디자인이 적용될 div와 className을 추가했습니다.
        <div className="welcome-card">
            <h1 className="welcome-text">
                안녕하세요, <span className="highlight-name">{props.name}</span>님!
            </h1>
        </div>
    )
}
export default Welcome;