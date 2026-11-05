import React from "react";

const students = [
    {
        id: 1,
        name: "장원영"
    },
    {
        id: 2,
        name: "안유진"
    },
    {
        id: 1,
        name: "김리즈"
    },
    {
        name: "박레이"
    },
    {
        name: "이가을"
    },
    {
        name: "최이서"
    }
];

function AttendanceBook() {
    return(
        <ul>
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;