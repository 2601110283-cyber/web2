import { useState } from "react";

// Custom Hook (사용자 정의 훅)
function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => {
        // 최대 10까지만 증가하도록 제한
        setCount((count) => Math.min(count + 1, 10));
    };

    const decreaseCount = () => {
        // 기존 코드 오타 수정: -1이 아니라 count - 1로 변경하여 0 이하로 내려가지 않게 함
        setCount((count) => Math.max(count - 1, 0));
    };

    return [count, increaseCount, decreaseCount];
}

export default useCounter;