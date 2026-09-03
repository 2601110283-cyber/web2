import React from "react";

import Book from "./Book";

function Library(){
    return(
        <div className="Library-container">
            <Book name="돈의 마법" numOfPage={300} imgurl="https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2FB3043718990_l.jpg&w=512&q=100"/>
            <Book name="난생처음 JAVA" numOfPage={200} imgurl="https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2FB5395686917_l.jpg&w=512&q=100"/>
            <Book name="처음 보는 React" numOfPage={500} imgurl="https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2FB6329001102_l.jpg&w=512&q=100"/>
            <Book name="나는 돈이 된다" numOfPage={343} imgurl="https://cdn-prod.hanbit.co.kr/books/9f40d522-142d-4623-b356-b58138f50eba.png"/>
            <Book name="그록봇 with 스킬, 루틴, 그룹, 커넥터" numOfPage={265} imgurl="https://cdn-prod.hanbit.co.kr/books/0d5bc993-3eb4-4c78-a5d4-11b4a80c9af4.png"/>
            <Book name="혼자 공부하는 바이브 코딩 with 클로드 코드" numOfPage={384} imgurl="https://www.hanbit.co.kr/_next/image?url=https%3A%2F%2Fcdn-prod.hanbit.co.kr%2Fbooks%2Fd9c93e15-1d98-451c-ab76-c20710d9e09c.png&w=512&q=100"/>
        </div>
    );
}

export default Library;