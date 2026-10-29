import React from "react";

function LogoutButton(props) {
    return(
        <button className="btn btn-logout" onClick={props.onClick}>로그아웃</button>
    );
}
export default LogoutButton;