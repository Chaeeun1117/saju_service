// import Main from "./components/Main";
// import TopBar from "./components/TopBar";
// import styled from "styled-components";

// function App() {
//   return (
//     <Wrapper>
//       <TopBar />
//       <Main />
//     </Wrapper>
//   );
// }

// export default App;

// const Wrapper = styled.div`
//   width : 100%
//   height:100vh;
//   display: flex;
//   flex-direction: column;
//   align-itmes: center;
//   background-color: #e6ffe6;

// `;

import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([
    {
      sender: "사주 상담가",
      text: "안녕하세요! 저는 사주 상담가입니다. 무엇을 도와드릴까요?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // 사용자 메시지 추가
    const newMessages = [...messages, { sender: "사용자", text: input }];
    setMessages(newMessages);

    // 기본 응답 메시지 추가
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "사주 상담가",
          text: "아직 초기 설정 상태입니다. 더 많은 질문을 준비해볼게요!",
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">사주세요 - 사주 풀이 상담</div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-bubble ${
              msg.sender === "사용자" ? "user" : "counselor"
            }`}
          >
            <strong>{msg.sender}</strong>: {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="메시지를 입력하세요..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
};

export default App;
