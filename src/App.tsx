/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ChatWindow from './components/ChatWindow';

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
      <ChatWindow />
    </div>
  );
}

export default App;
