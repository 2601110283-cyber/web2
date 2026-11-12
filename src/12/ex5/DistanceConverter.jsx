import React, { useState } from 'react';
import DistanceInput from './DistanceInput';
import styles from './DistanceConverter.module.css';

// 단위 변환 함수
function toMiles(kilometers) {
    return kilometers / 1.60934;
}

function toKilometers(miles) {
    return miles * 1.60934;
}

function tryConvert(distance, convert) {
    const input = parseFloat(distance);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    // 소수점 셋째 자리까지 반올림
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function DistanceConverter() {
    const [distance, setDistance] = useState('');
    const [unit, setUnit] = useState('km');

    // 하위 컴포넌트(DistanceInput)에서 event.target.value를 바로 넘겨주므로
    // 파라미터로 value를 받습니다.
    const handleKmChange = (value) => {
        setDistance(value);
        setUnit('km');
    };

    const handleMileChange = (value) => {
        setDistance(value);
        setUnit('mile');
    };

    const km = unit === 'mile' ? tryConvert(distance, toKilometers) : distance;
    const mile = unit === 'km' ? tryConvert(distance, toMiles) : distance;

    return (
        <div className={styles.converterContainer}>
            <h2>거리 단위 변환기</h2>

            <div className={styles.inputGroup}>
                <DistanceInput
                    unit="km"
                    distance={km}
                    onDistanceChange={handleKmChange}
                />
                <DistanceInput
                    unit="mile"
                    distance={mile}
                    onDistanceChange={handleMileChange}
                />
            </div>

            <div className={styles.resultBox}>
                {distance === "" ? (
                    "거리를 입력해주세요."
                ) : (
                    `${km}km는 ${mile}마일입니다.`
                )}
            </div>
        </div>
    );
}

export default DistanceConverter;