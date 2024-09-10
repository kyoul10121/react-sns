/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const otherMessageItemWrapper = css`
  width: 100%;
  display: flex;
  gap: 8px;
`;
const profileImage = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
`;
const otherMessageInfo = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const userId = css`
  font-size: 14px;
  color: #979797;
  justify-content: flex-start;
`;

const otherMessageTextItem = css`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;
const otherMessageText = css`
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

export const OtherMessageItem = () => {
  return (
    <div css={otherMessageItemWrapper}>
      <img src="src/assets/mark.jpeg" css={profileImage} />
      <div css={otherMessageInfo}>
        <span css={userId}>onyourM__ark</span>
        <div css={otherMessageTextItem}>
          <div css={otherMessageText}>NCT 127</div>
          <span css={userTime}>오후 5:33</span>
        </div>
      </div>
    </div>
  );
};
