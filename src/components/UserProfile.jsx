/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export const UserProfile = () => {
  return (
    <div css={userProfileItems}>
      <img src="src/assets/arrow-left.png" css={arrowLeft} />
      <img src="src/assets/mark.jpeg" css={userProfileImage} />
      <section css={userWrapper}>
        {/* 이름과 아이디 */}
        <span css={userName}>이민형</span>
        <span css={userId}>onyourM__ark</span>
      </section>
    </div>
  );
};

// emotion
const userProfileItems = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const userProfileImage = css`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
`;
const userWrapper = css`
  display: flex;
  flex-direction: column;
`;
const userName = css`
  font-size: 18px;
`;
const userId = css`
  font-size: 12px;
  color: #979797;
`;
const arrowLeft = css`
  fill: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
