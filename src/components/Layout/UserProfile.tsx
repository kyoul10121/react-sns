/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Arrow from '../../assets/icons/arrow.svg';
import Profile from '../../assets/images/mark.jpeg';
import { useNavigate } from 'react-router-dom';

export const UserProfile = () => {
  const navigate = useNavigate();
  const handleGoToChatList = () => {
    navigate('/chatList');
  };
  return (
    <div css={userProfileItems}>
      <img src={Arrow} css={arrowLeft} onClick={handleGoToChatList} />
      <img src={Profile} css={userProfileImage} />
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
