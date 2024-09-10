/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const messageInput = css`
  padding: 12px 8px 32px;
`;
const MessageWindow = () => {
  // 메세지 입력창을 포함한 모든 대화창
  return (
    <div>
      <MessageList />
      <div css={messageInput}>
        <MessageInput />
      </div>
    </div>
  );
};
export default MessageWindow;
