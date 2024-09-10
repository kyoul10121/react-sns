/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}

        @font-face {
          font-family: 'Pretendard-Regular';
          src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
            format('woff');
          font-weight: 400;
          font-style: normal;
        }

        * {
          box-sizing: border-box;
          scrollbar-width: none;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background: white;
          min-height: 100%;
          font-family: 'Pretendard-Regular';
        }
        button {
          border: none;
          background: none;
        }
        input,
        textarea {
          outline: none;
          border: none;
        }
      `}
    />
  );
};

export default GlobalStyles;
