/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MessageInputPage from './pages/MessageInputPage';

const appStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function App() {
  return (
    <div css={appStyle}>
      <MessageInputPage />
    </div>
  );
}

export default App;
