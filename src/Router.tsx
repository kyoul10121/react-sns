import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import MessageInputPage from './pages/MessageInputPage';
import ChatListPage from './pages/ChatListPage';
export const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    children: [
      {
        path: 'chatList', // 상대 경로로 변경
        element: <ChatListPage />,
      },
      {
        path: 'message/:userId', // userId 파라미터 추가
        element: <MessageInputPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
