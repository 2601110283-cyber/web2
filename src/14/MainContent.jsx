import { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";
import "./MainContent.css";

// 날짜가 빠른 순서로 정렬된 12월 클래스 목록
const CLASS_LIST = [
    {
        id: 1,
        day: "토요일",
        short: "사진",
        title: "건축 사진 산책",
        desc: "성수동 골목을 걸으며 빛과 여백을 담는 법을 배웁니다.",
        date: "12월 5일 토요일 오전 10시",
        duration: "3시간",
        price: 45000,
        seats: 3,
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        day: "토요일",
        short: "도예",
        title: "물레 도예 입문",
        desc: "물레로 컵 두 개를 빚고, 구운 뒤 집으로 보내 드립니다.",
        date: "12월 5일 토요일 오후 2시",
        duration: "2시간 30분",
        price: 68000,
        seats: 2,
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        day: "일요일",
        short: "커피",
        title: "핸드드립 커피",
        desc: "원두 세 가지를 내려 마시며 내 입맛을 찾습니다.",
        date: "12월 6일 일요일 오전 11시",
        duration: "2시간",
        price: 38000,
        seats: 5,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        day: "일요일",
        short: "조향",
        title: "겨울 숲 조향",
        desc: "나무와 이끼 향을 섞어 30ml 향수 한 병을 만듭니다.",
        date: "12월 6일 일요일 오후 3시",
        duration: "2시간",
        price: 55000,
        seats: 0,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        day: "평일 저녁",
        short: "가죽",
        title: "가죽 다이어리 만들기",
        desc: "가죽을 재단하고 손바느질해 내년 다이어리를 완성합니다.",
        date: "12월 10일 목요일 저녁 7시 30분",
        duration: "3시간",
        price: 72000,
        seats: 4,
        image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    },
];

const DAYS = ["전체", "토요일", "일요일", "평일 저녁"];

// 스위치 안에 들어가는 아이콘 (해 / 달)
function SunIcon() {
    return (
        <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
            <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
            <path
                d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
            <path
                d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </svg>
    );
}

// 남은 자리 문구
function seatText(seats) {
    return seats === 0 ? "마감" : `${seats}자리 남음`;
}

function MainContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [selectedDay, setSelectedDay] = useState("전체");

    const isDark = theme === "dark";

    const countOf = (day) =>
        day === "전체" ? CLASS_LIST.length : CLASS_LIST.filter((item) => item.day === day).length;

    const filteredList =
        selectedDay === "전체" ? CLASS_LIST : CLASS_LIST.filter((item) => item.day === selectedDay);

    return (
        <div className={`mono-wrapper ${theme}`}>
            {/* 헤더: 로고 / 메뉴 / 다크 모드 스위치 */}
            <header className="mono-header">
                <div className="mono-header-inner">
                    <a href="#top" className="mono-logo">아틀리에 모노</a>

                    <div className="mono-header-right">
                        <nav className="mono-nav">
                            <a href="#classes" className="active">클래스</a>
                            <a href="#about">공방 소개</a>
                            <a href="#location">오시는 길</a>
                        </nav>

                        {/* 다크 / 라이트 전환 스위치 */}
                        <button
                            type="button"
                            role="switch"
                            aria-checked={isDark}
                            className={`mono-switch ${isDark ? "on" : ""}`}
                            onClick={toggleTheme}
                        >
                            <span className="mono-switch-label">다크 모드</span>
                            <span className="mono-switch-track">
                                <span className="mono-switch-thumb">
                                    {isDark ? <MoonIcon /> : <SunIcon />}
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="mono-main" id="top">
                {/* 소개 영역 */}
                <section className="mono-hero">
                    <h1 className="mono-title">
                        주말 하루,
                        <br />
                        손으로 만드는 시간
                    </h1>

                    <div className="mono-intro">
                        <p>
                            12월 원데이 클래스 다섯 개를 열었습니다. 재료와 도구는 공방에서
                            준비하니 편한 옷차림으로 오세요.
                        </p>
                        <dl className="mono-facts">
                            <div>
                                <dt>장소</dt>
                                <dd>성수동 공방 2층</dd>
                            </div>
                            <div>
                                <dt>정원</dt>
                                <dd>클래스마다 6명</dd>
                            </div>
                        </dl>
                    </div>
                </section>

                {/* 요일 필터 */}
                <div className="mono-tabs" id="classes" role="group" aria-label="요일별로 보기">
                    {DAYS.map((day) => (
                        <button
                            type="button"
                            key={day}
                            className={selectedDay === day ? "active" : ""}
                            aria-pressed={selectedDay === day}
                            onClick={() => setSelectedDay(day)}
                        >
                            {day}
                            <span className="mono-tab-count">{countOf(day)}</span>
                        </button>
                    ))}
                </div>

                {/* 클래스 카드: 목록의 첫 번째(가장 빠른 날짜)는 크게 보여 줌 */}
                <section className="mono-grid">
                    {filteredList.map((item, index) => {
                        const isFirst = index === 0;
                        const isClosed = item.seats === 0;
                        const cardClass = [
                            "mono-card",
                            isFirst ? "featured" : "",
                            isClosed ? "closed" : "",
                        ].join(" ");

                        return (
                            <article className={cardClass} key={item.id}>
                                <div className="mono-photo">
                                    {/* 사진을 못 불러오면 이 글자가 대신 보임 */}
                                    <span className="mono-photo-fallback">{item.short}</span>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />
                                </div>

                                <div className="mono-card-body">
                                    {isFirst && (
                                        <p className="mono-soonest">가장 먼저 열리는 클래스</p>
                                    )}
                                    <p className="mono-when">{item.date}</p>
                                    <h2 className="mono-card-title">{item.title}</h2>
                                    <p className="mono-desc">{item.desc}</p>
                                    <p className="mono-bottom">
                                        <span>
                                            {item.price.toLocaleString("ko-KR")}원
                                            <span className="mono-duration">{item.duration}</span>
                                        </span>
                                        <span
                                            className={`mono-seats ${
                                                item.seats > 0 && item.seats <= 2 ? "few" : ""
                                            }`}
                                        >
                                            {seatText(item.seats)}
                                        </span>
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </section>
            </main>

            <footer className="mono-footer">
                <div className="mono-footer-inner">
                    <span>아틀리에 모노</span>
                    <span>서울 성동구 성수동, 화요일부터 일요일 오전 10시 - 오후 9시</span>
                </div>
            </footer>
        </div>
    );
}

export default MainContent;