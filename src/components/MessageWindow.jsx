/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import chatData from '/public/chatData.json';
import userData from '/public/userData.json';

const MessageWindow = () => {
  // 메세지 입력창을 포함한 모든 대화창

  const [messages, setMessages] = useState([]);
  const [users] = useState(userData);

  // 컴포넌트가 처음 렌더링될 때 JSON 데이터 불러오기
  useEffect(() => {
    setMessages(chatData); // 초기 메세지 로드
  }, []);

  const handleSendMessage = (newMessageText) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const newMessage = {
      id: messages.length + 1,
      userId: 1, // 현재 로그인된 사용자를 가정
      text: newMessageText,
      time: currentTime,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]); // 메세지 추가
  };

  const messageWindowRef = useRef(null);

  // 메시지가 업데이트될 때 자동으로 하단으로 스크롤
  useEffect(() => {
    messageWindowRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]); // messages가 업데이트될 때마다 실행

  return (
    <div>
      {/* 메세지 목록 렌더링 */}
      <MessageList messages={messages} users={users} />
      <div css={messageInput}>
        {/* 메세지 입력 */}
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
      <div ref={messageWindowRef}></div>
    </div>
  );
};

export default MessageWindow;

// emotion
const messageInput = css`
  position: sticky;
  z-index: 2;
  bottom: 0;
  width: 100%;
  padding: 12px 8px 32px;
`;
