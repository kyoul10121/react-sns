import { atom } from 'recoil';
import chatData from '../db/chatData.json';

export const chatState = atom({
  key: 'chatState',
  default: chatData,
});
