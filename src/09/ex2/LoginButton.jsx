import React from "react";

function LoginButton(props) { // 함수명도 LoginButton으로 수정
    return(
        <button className="btn btn-login" onClick={props.onClick}>로그인</button>
    )
}
export default LoginButton; // 내보내는 이름도 LoginButton으로 수정