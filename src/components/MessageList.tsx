/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { OtherMessageItem } from './OtherMessageItem.js';
import { MyMessageItem } from './MyMessageItem.js';
interface Message {
  id: number;
  userId: number;
  text: string;
  time: string;
}
interface User {
  id: number;
  userName: string;
  userImage: string;
}
interface MessageListProps {
  users: User[];
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ users, messages }) => {
  // 각각의 메세지를 포함한 메세지 리스트
  return (
    <div css={messageListWrapper}>
      {messages.map((message) => {
        const user = users.find((user) => user.id === message.userId)!; // '!'를 추가해줌으로서 user는 반드시 존재한다.
        if (message.userId === 1) {
          return (
            <MyMessageItem key={message.id} message={message} user={user} />
          );
        } else {
          return (
            <OtherMessageItem key={message.id} message={message} user={user} />
          );
        }
      })}
    </div>
  );
};

export default MessageList;

// emotion
const messageListWrapper = css`
  width: 100%;
  padding: 0 20px 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
`;
