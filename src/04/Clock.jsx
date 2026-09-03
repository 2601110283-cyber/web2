import React, { useState, useEffect } from "react";
import './Clock.css';

function Clock() {
    const [time, setTime] = useState(new Date());

    // 1초마다 현재 시간을 업데이트
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // 컴포넌트가 언마운트될 때 타이머 정리
        return () => clearInterval(timer);
    }, []);

    // 시간, 분, 초를 두 자리 숫자로 포맷팅 (예: 9 -> 09)
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0'); // 초 추가

    return (
        <div className="clock-background">
            <div className="clock-container">
                {/* 시:분:초 형태로 출력되도록 변경 */}
                <h1 className="time">{hours}:{minutes}:{seconds}</h1>
            </div>
        </div>
    );
}

export default Clock;