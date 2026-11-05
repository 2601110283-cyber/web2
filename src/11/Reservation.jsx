import React, { useState } from "react";
import "./Reservation.css"; // CSS 파일 연결

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(1);

    const handleSubmit = (event) => {
        alert(`아침 식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}명`);
        event.preventDefault();
    }

    return(
        <div className="reservation-container">
            <form className="reservation-card" onSubmit={handleSubmit}>
                <h2 className="card-title">예약 정보 입력</h2>

                <div className="input-group">
                    <label className="checkbox-label">
                        <span className="label-text">조식 추가 여부</span>
                        <input
                            type="checkbox"
                            className="toggle-checkbox"
                            checked={haveBreakfast}
                            onChange={event => setHaveBreakfast(event.target.checked)}
                        />
                    </label>
                </div>

                <div className="input-group">
                    <label className="number-label">
                        <span className="label-text">방문자 수 (명)</span>
                        <input
                            type="number"
                            className="number-input"
                            min="1"
                            value={numberOfGuest}
                            onChange={event => setNumberOfGuest(event.target.value)}
                        />
                    </label>
                </div>

                <button className="submit-btn" type="submit">예약 완료하기</button>
            </form>
        </div>
    );
}

export default Reservation;