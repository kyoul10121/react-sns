/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const imageSize = css`
  width: 36px;
  height: 36px;
`;
const searchButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const submitButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const messageInputText = css`
  resize: none; // textarea 기본 스타일 삭제
  display: flex;
  flex: 1;
  height: 36px;
  padding: 8px 16px;
  overflow: auto;
  background: none;
  font-size: 18px;
  color: #979797;
  letter-spacing: -0.4px;
  cursor: text;
`;
const messageInputForm = css`
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding: 6px;
  backdrop-filter: blur(8px);
  background: #e3e3e35f;
  border-radius: 24px;
  gap: 8px;
`;

const MessageInput = () => {
  return (
    <div>
      <form css={messageInputForm}>
        <button css={searchButton}>
          <img src="src/assets/search.png" css={imageSize} />
        </button>
        <textarea
          css={messageInputText}
          placeholder="메세지 보내기..."
        ></textarea>
        <button css={submitButton}>
          <img src="src/assets/send.png" css={imageSize} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
