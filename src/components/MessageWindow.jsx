import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const MessageWindow = () => {
  // 메세지 입력창을 포함한 모든 대화창
  return (
    <div>
      <MessageList />
      <MessageInput />
    </div>
  );
};
export default MessageWindow;
