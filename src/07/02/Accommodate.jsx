import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";
import "./Accommodate.css"; // CSS 파일 임포트

const MAX_CAPACITY = 10;

function Accommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0);
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        console.log("========= useEffect 확인용==========");
        console.log("useEffect 실행됨: 컴포넌트가 마운트될 때, 업데이트 될 때");
        console.log(`isFull: ${isFull}`);
    });

    // count 값이 변경될 때마다 정원(10명) 초과 여부를 확인
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div className="container">
            <p className="count-text">{`현재 총 ${count}명 수용중입니다.`}</p>

            <div className="button-container">
                {/* 10명이 가득 차면(isFull === true) 입장 버튼 비활성화 */}
                <button
                    className="btn btn-enter"
                    onClick={increaseCount}
                    disabled={isFull}
                >
                    수용시설에 입장
                </button>
                <button
                    className="btn btn-leave"
                    onClick={decreaseCount}
                >
                    수용시설에 퇴장
                </button>
            </div>

            {/* 인원이 10명이 되어 isFull이 true일 때만 아래 경고 문구가 출력됨 */}
            {isFull && <p className="full-warning">수용시설에 정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accommodate;