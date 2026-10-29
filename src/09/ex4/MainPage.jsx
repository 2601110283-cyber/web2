import React, {useState} from "react";
import WarningBanner from "./WarningBanner";
import './warning.css'; // ★ CSS 파일 불러오기

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const btnListener = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return(
        <div className="page-wrapper">
            <div className="content-box">
                <WarningBanner warning={showWarning} />

                <button className="toggle-btn" onClick={btnListener}>
                    {showWarning ? "감추기" : "보이기"}
                </button>
            </div>
        </div>
    )
}

export default MainPage;