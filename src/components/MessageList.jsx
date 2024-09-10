/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { OtherMessageItem } from './OtherMessageItem';
import { MyMessageItem } from './MyMessageItem.jsx';

const messageListWrapper = css`
  width: 100%;
  padding: 100px 20px 92px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  overflow: scroll;
`;
const MessageList = () => {
  // 각각의 메세지를 포함한 메세지 리스트
  return (
    <div css={messageListWrapper}>
      <OtherMessageItem />
      <MyMessageItem />
    </div>
  );
};

export default MessageList;
