import React, {useState} from "react";
import "./FruitSelect.css"; // CSS 파일 불러오기

function FruitSelect() {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert("선택한 과일: " + value);
        event.preventDefault();
    }

    return(
        <div className="form-container">
            <form className="fruit-form" onSubmit={handleSubmit}>
                <h2 className="form-title">과일 선택기</h2>

                <label className="form-label">
                    좋아하는 과일을 선택하세요
                    <div className="select-wrapper">
                        <select className="fruit-select" value={value} onChange={handleChange}>
                            <option value="" disabled>과일을 골라주세요</option>
                            <option value={"apple"}>🍎 사과</option>
                            <option value={"banana"}>🍌 바나나</option>
                            <option value={"grapes"}>🍇 포도</option>
                            <option value={"melon"}>🍈 참외</option>
                        </select>
                    </div>
                </label>

                <button className="submit-button" type="submit">제출하기</button>
            </form>
        </div>
    );
}

export default FruitSelect;