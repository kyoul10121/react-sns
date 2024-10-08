/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '../components/Layout/Header';
import MessageWindow from '../components/MessageWindow';
// 채팅창 화면
export default function MessageInputPage() {
  return (
    <div css={wrapper}>
      <Header />
      <MessageWindow />
    </div>
  );
}

// emotion
const wrapper = css`
  max-width: 430px;
  width: 100%; /* 부모 요소의 너비 설정 */
  border: 1px solid #dbdbdb;
`;
