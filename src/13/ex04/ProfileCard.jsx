import React, { useState } from "react";
import Card from "./Card";

const PAGE_SIZE = 5;

const TOP_LISTINGS = [
    {
        id: 1,
        title: "중구의 집",
        date: "1월 15일~17일",
        price: "총액 ₩590,000",
        rating: "5.0",
        badge: "",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        title: "해운대구의 아파트",
        date: "2월 12일~14일",
        price: "총액 ₩900,000",
        rating: "4.92",
        badge: "게스트 선호",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        title: "수영구의 집",
        date: "12월 11일~13일",
        price: "총액 ₩1,110,000",
        rating: "4.98",
        badge: "게스트 선호",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        title: "동구의 집",
        date: "1월 22일~24일",
        price: "총액 ₩798,000",
        rating: "5.0",
        badge: "게스트 선호",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 5,
        title: "부산진구의 집",
        date: "2월 19일~21일",
        price: "총액 ₩404,000",
        rating: "4.94",
        badge: "게스트 선호",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    },
];

const WEEKEND_LISTINGS = [
    {
        id: 101,
        title: "중구의 아파트",
        date: "11월 20일~22일",
        price: "",
        rating: "",
        badge: "게스트 선호",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 102,
        title: "해운대구의 아파트",
        date: "11월 20일~22일",
        price: "",
        rating: "",
        badge: "",
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 103,
        title: "동구의 집",
        date: "11월 20일~22일",
        price: "",
        rating: "",
        badge: "게스트 선호",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 104,
        title: "부산진구의 호텔 다인실",
        date: "11월 20일~22일",
        price: "",
        rating: "",
        badge: "",
        image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 105,
        title: "수영구의 집",
        date: "11월 20일~22일",
        price: "",
        rating: "",
        badge: "게스트 선호",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
    },
];

/* 섹션 하나: 제목(→ 버튼) + 우측 ‹ › 버튼 + 5열 카드 목록 */
function ListingSection({ title, listings }) {
    const [page, setPage] = useState(0);
    const lastPage = Math.max(0, Math.ceil(listings.length / PAGE_SIZE) - 1);
    const visible = listings.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

    return (
        <section className="Section">
            <div className="Section-header">
                <h2 className="Section-title">{title}</h2>
                <div className="Section-nav">
                    <button type="button" className="Section-more">전체 보기</button>
                    <button
                        type="button"
                        className="Nav-btn"
                        aria-label="이전"
                        disabled={page === 0}
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        className="Nav-btn"
                        aria-label="다음"
                        disabled={page === lastPage}
                        onClick={() => setPage((p) => Math.min(lastPage, p + 1))}
                    >
                        ›
                    </button>
                </div>
            </div>

            <div className="Card-list">
                {visible.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        badge={item.badge}
                        image={item.image}
                        rating={item.rating}
                    >
                        <p className="Card-date">{item.date}</p>
                        {item.price && <p className="Card-price">{item.price}</p>}
                    </Card>
                ))}
            </div>
        </section>
    );
}

function ProfileCard() {
    return (
        <div className="Airbnb-wrap">
            <ListingSection title="부산의 인기 숙소" listings={TOP_LISTINGS} />
            <ListingSection title="이번 주말에 예약 가능한 광안리해수욕장 숙소" listings={WEEKEND_LISTINGS} />
        </div>
    );
}

export default ProfileCard;