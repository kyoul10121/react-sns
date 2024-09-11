/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import { OtherMessageItem } from './OtherMessageItem.jsx';
import { MyMessageItem } from './MyMessageItem.jsx';

const MessageList = ({ users, messages }) => {
  // 각각의 메세지를 포함한 메세지 리스트
  return (
    <div css={messageListWrapper}>
      {messages.map((message) => {
        const user = users.find((user) => user.id === message.userId);
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
  padding: 100px 20px 92px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  overflow: scroll;
`;
