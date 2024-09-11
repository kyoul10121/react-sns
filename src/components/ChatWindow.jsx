/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Header from './Header';
import MessageWindow from './MessageWindow';

const ChatWindow = () => {
  return (
    <div css={Wrapper}>
      <Header />
      <MessageWindow />
    </div>
  );
};

export default ChatWindow;

// emotion
const Wrapper = css`
  max-width: 430px;
  width: 100%; /* 부모 요소의 너비 설정 */
  border: 1px solid #dbdbdb;
`;
