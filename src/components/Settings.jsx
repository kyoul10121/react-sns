/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

export const Settings = () => {
  // 방해금지모드
  return (
    <div css={settingButtonWrapper}>
      <button>
        <img src="src/assets/notification-bell.png" css={settingButton} />
      </button>
      <button>
        <img src="src/assets/video-button.png" css={videoButton} />
      </button>
    </div>
  );
};

// emotion
const settingButtonWrapper = css`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const settingButton = css`
  fill: none;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
const videoButton = css`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
