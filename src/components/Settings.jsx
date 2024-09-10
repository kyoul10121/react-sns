/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const settingButton = css`
  fill: none;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
const videoButton = css`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Settings = () => {
  // 방해금지모드
  return (
    <div>
      <button>
        <img src="src/assets/notification-bell.png" css={settingButton} />
      </button>
      <button>
        <img src="src/assets/video-button.png" css={videoButton} />
      </button>
    </div>
  );
};
