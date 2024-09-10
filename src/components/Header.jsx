/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { UserProfile } from './UserProfile';
import { Settings } from './Settings';

const headerWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  padding: 12px 16px;
`;

const Header = () => {
  // 프로필, 알림 기능 있는 헤더바
  return (
    <div css={headerWrapper}>
      <UserProfile />
      <Settings />
    </div>
  );
};

export default Header;
