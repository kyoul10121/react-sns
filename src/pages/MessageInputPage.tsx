/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '../components/Layout/Header';
import MessageWindow from '../components/MessageWindow';

export default function MessageInputPage() {
  return (
    <div css={Wrapper}>
      <Header />
      <MessageWindow />
    </div>
  );
}

// emotion
const Wrapper = css`
  max-width: 430px;
  width: 100%; /* 부모 요소의 너비 설정 */
  border: 1px solid #dbdbdb;
`;
