/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Header from './Header';
import MessageWindow from './MessageWindow';

const Wrapper = css`
  /* align-items: center;
  justify-self: center;
  /* width: 100%;  */
  max-width: 430px;
  border: 1px solid #878787;
`;

const ChatWindow = () => {
  return (
    <div css={Wrapper}>
      <Header />
      <MessageWindow />
    </div>
  );
};

export default ChatWindow;
