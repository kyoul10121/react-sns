import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

// 채팅방 목록 페이지
export default function ChatListPage() {
  const navigate = useNavigate();
  const handleGoToMessage = () => {
    navigate('/message');
  };
  return (
    <div css={chatWrapper} onClick={handleGoToMessage}>
      채팅방 목록 입니다 !
    </div>
  );
}

const chatWrapper = css`
  border: 100px solid red;
`;
