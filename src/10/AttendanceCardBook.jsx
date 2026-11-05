import React from "react";
import "./AttendanceCardBook.css";
import img1 from "./won.webp";

const students = [
    {
        id: 1,
        name: "장원영",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: img1
    },
    {
        id: 2,
        name: "안유진",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        id: 3,
        name: "김리즈",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        id: 4,
        name: "박레이",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        id: 5,
        name: "이가을",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        id: 6,
        name: "최이서",
        grade: 1,
        major: "인공지능소프트웨어",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg"
    }
];

function AttendanceCardBook() {
    return(
        <div className="book-container">
            <h2 className="book-title">학생 출석부</h2>
            <div className="card-grid">
                {students.map(student => (
                        <div key={student.id} className="student-card">
                            <img src={student.avatar} alt={`${student.name} 프로필`} className="avatar-img" />
                            <div>
                                <h3 className="student-name">{student.name}</h3>
                                <p className="student-info">{student.grade}학년 | {student.major}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

// 이 줄이 있어야 다른 파일에서 AttendanceCardBook을 사용할 수 있습니다.
export default AttendanceCardBook;