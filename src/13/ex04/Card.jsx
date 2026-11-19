import React, { useState } from "react";
import "./Card.css";

function HeartIcon({ liked }) {
    return (
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false" className="Card-heart-icon">
            <path
                d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"
                fill={liked ? "#ff6b5b" : "none"}
                stroke={liked ? "#ff6b5b" : "#222222"}
                strokeWidth="2"
            />
        </svg>
    );
}

function Card(props) {
    const { title, badge, image, rating, children } = props;
    const [liked, setLiked] = useState(false);

    return (
        <div className="Card">
            <div className="Card-img-wrap">
                {image && <img className="Card-img" src={image} alt={title || "숙소 이미지"} />}
                {badge && (
                    <span className="Card-badge">
                        <span className="Card-badge-icon" aria-hidden="true">✦</span>
                        {badge}
                    </span>
                )}
                <button
                    type="button"
                    className={`Card-heart ${liked ? "liked" : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setLiked((prev) => !prev);
                    }}
                    aria-label={liked ? "위시리스트에서 삭제" : "위시리스트에 저장"}
                    aria-pressed={liked}
                >
                    <HeartIcon liked={liked} />
                </button>
            </div>
            <div className="Card-head">
                {title && <h3 className="Card-title">{title}</h3>}
                {rating && (
                    <span className="Card-rating">
                        <span aria-hidden="true">★</span> {rating}
                    </span>
                )}
            </div>
            <div className="Card-body">{children}</div>
        </div>
    );
}

export default Card;