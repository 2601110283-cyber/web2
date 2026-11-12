import React, { useState } from 'react';
import './App.css';

function BoilingVerdict({ celsius }) {
    if (celsius >= 100) {
        return <div className="verdict-message">물이 끓습니다.</div>;
    }
    return <div className="verdict-message">물이 끓지 않습니다.</div>;
}

export default function Calculator() {
    const [temperature, setTemperature] = useState('1');

    const handleChange = (e) => {
        setTemperature(e.target.value);
    };

    return (
        <div className="calculator-container">
            <div className="calculator-card">
                <div className="label-badge">섭씨 온도를 입력하세요:</div>
                <input
                    type="number"
                    className="temperature-input"
                    value={temperature}
                    onChange={handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        </div>
    );
}