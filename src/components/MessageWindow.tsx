/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import chatData from '../db/chatData.json';
import userData from '../db/userData.json';
import { Message, User } from '../types';

const MessageWindow = () => {
  // 메세지 입력창을 포함한 모든 대화창

  const [messages, setMessages] = useState<Message[]>([]);
  const [users] = useState<User[]>(userData);

  // 컴포넌트가 처음 렌더링될 때 JSON 데이터 불러오기
  useEffect(() => {
    const chatMessages = chatData[0].messages as Message[]; // chatData의 messages만 불러오기
    setMessages(chatMessages);
  }, []);

  const handleSendMessage = (newMessageText: string) => {
    // newMessageText의 타입을 string으로 명시
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const newMessage = {
      id: messages.length + 1,
      userId: 'onyourM__ark', // 현재 로그인된 사용자를 가정
      text: newMessageText,
      time: currentTime,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]); // 메세지 추가
  };

  const messageWindowRef = useRef<HTMLDivElement>(null); // messageWindowRef가 HTMLDivElement임을 명시

  // 메시지가 업데이트될 때 자동으로 하단으로 스크롤
  useEffect(() => {
    if (messageWindowRef.current)
      // ref가 null이 아닌지 확인 후 스크롤
      messageWindowRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]); // messages가 업데이트될 때마다 실행
  console.log(messages);
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
