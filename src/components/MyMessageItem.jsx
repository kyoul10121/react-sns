/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const MyMessageItemWrapper = css`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 8px;
`;
const profileImage = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
`;
const MyMessageInfo = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;
const userId = css`
  font-size: 14px;
  color: #979797;
`;

const MyMessageTextItem = css`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;
const MyMessageText = css`
  width: fit-content;
  max-width: 240px;
  padding: 12px;
  background: #e9e9e9;
  font-size: 18px;
  border-radius: 5px 20px 20px;
`;
const userTime = css`
  font-size: 10px;
  color: #b6b6b6;
`;

export const MyMessageItem = () => {
  return (
    <div>
      <div css={MyMessageItemWrapper}>
        <div css={MyMessageInfo}>
          <span css={userId}>kyoul10121</span>
          <div css={MyMessageTextItem}>
            <span css={userTime}>오후 7:12</span>
            <div css={MyMessageText}>사랑해</div>
          </div>
        </div>
        <img src="src/assets/myprofile.jpeg" css={profileImage} />
      </div>
    </div>
  );
};
