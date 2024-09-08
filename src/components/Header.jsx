import React from 'react';
import { UserProfile } from './UserProfile';
import { Settings } from './Settings';

const Header = () => {
  // 프로필, 알림 기능 있는 헤더바
  return (
    <div>
      <UserProfile />
      <Settings />
      <section>
        <button name="videoButton">전화</button>
      </section>
    </div>
  );
};

export default Header;
