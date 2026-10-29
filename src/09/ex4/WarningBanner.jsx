import React from "react";

function WarningBanner(props) {
    if (!props.warning){
        return null;
    } else {
        // warning-banner 클래스 연결
        return <div className="warning-banner">🚨 경고! 문제가 발생했습니다.</div>;
    }
}

export default WarningBanner;