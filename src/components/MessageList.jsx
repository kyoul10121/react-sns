import React from 'react';
import MessageItem from './MessageItem';

const MessageList = () => {
  // 각각의 메세지를 포함한 메세지 리스트
  return (
    <div>
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
    </div>
  );
};

export default MessageList;
