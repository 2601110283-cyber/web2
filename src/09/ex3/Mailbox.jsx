import React from "react";
import './Mailbox.css';

function Mailbox(props) {
    const unreadMessages = 3;

    return(
        // div에 mailbox-container 클래스 적용
        <div className="mailbox-container">
            {/* h1에 greeting-text 클래스 적용 */}
            <h1 className="greeting-text">안녕하세요!</h1>

            {unreadMessages > 0 &&
                // h2에 notification-badge 클래스 적용
                <h2 className="notification-badge">
                    현재 {unreadMessages}개의 읽지 않은 메시지가 있습니다.
                </h2>
            }
        </div>
    );
}

export default Mailbox;