import React from "react";
import Avatar from "./Avatar";
import "./Userinfo.css"; // 파일 이름 오타 수정 (실제 파일명과 동일해야 함)

function Userinfo(props) {
    return(
        <div className="user-info">
            <Avatar user={props.user}/>
            <div className="user-info-name">
                {/* 대문자 U를 소문자 u로 수정 */}
                {props.user.name}
            </div>
        </div>
    );
}

export default Userinfo;