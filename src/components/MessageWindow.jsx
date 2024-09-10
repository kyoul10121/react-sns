/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import chatData from '../public/chatData.json';
import userData from '../public/userData';

const messageInput = css`
  padding: 12px 8px 32px;
`;
const MessageWindow = () => {
  // 메세지 입력창을 포함한 모든 대화창

  const [messages, setMessages] = useState([]);
  const [users] = useState(userData);

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
    setMessages([...messages, newMessage]); // 메세지 추가
  };

  return (
    <div>
      <MessageList messages={messages} users={users} />
      <div css={messageInput}>
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default MessageWindow;
