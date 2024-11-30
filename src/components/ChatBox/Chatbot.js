import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // 설정 화면 표시 상태

  const addMessage = (sender, message) => {
    setMessages((prevMessages) => [...prevMessages, { sender, message }]);
  };

  const handleSendMessage = () => {
    const message = userInput.trim();
    if (message.length === 0) return;

    // 사용자의 메시지를 추가
    addMessage("user", message);
    setUserInput(""); // 메시지를 보내고 입력창 초기화
    setLoading(true);

    // 사주 상담가의 응답 처리
    setTimeout(() => {
      // 상담가의 응답을 한 번만 추가
      addMessage("bot", "오늘도 잘 해낼거야 완전 럭키비키자나~!");
      setLoading(false); // 응답 후 로딩 상태 종료
    }, 1000); // 1초 후에 응답 추가
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen); // 설정 화면 표시 토글
  };

  return (
    <div id="Chatbot">
      {/* 헤더 */}
      <div className="header">
        <h1>사주 보기</h1>
        <button className="settingsButton" onClick={toggleSettings}>
          ⚙️ 설정
        </button>
      </div>

      {/* 설정 패널 */}
      <div className={`settingsPanel ${isSettingsOpen ? "open" : ""}`}>
        <h2>설정</h2>
        <div className="settingsItem">
          <h3>프로필 설정</h3>
          <p>사용자 이름 및 프로필 사진 변경</p>
        </div>
        <div className="settingsItem">
          <h3>사주 캐릭터 설정</h3>
          <p>사주 상담가의 캐릭터 스타일 변경</p>
        </div>
        <button className="closeSettings" onClick={toggleSettings}>
          닫기
        </button>
      </div>

      {/* 채팅 내용 */}
      <div className="chatDiv">
        {loading && (
          <span className="messageWait">답변을 기다리고 있습니다...</span>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <strong>{msg.sender === "user" ? "사용자" : "사주 상담가"}:</strong>{" "}
            {msg.message}
          </div>
        ))}
      </div>

      {/* 메시지 입력창 */}
      <div className="inputDiv">
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
};

export default Chatbot;
