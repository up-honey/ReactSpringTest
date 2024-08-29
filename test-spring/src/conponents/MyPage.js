// src/components/MyPage.js
import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MyPage = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8282/logout', {}, { withCredentials: true });
      console.log('로그아웃 성공!');
      history.push('/login'); // 로그인 페이지로 리다이렉트
    } catch (err) {
      console.error('로그아웃 실패:', err);
    }
  };

  return (
    <div>
      <h2>마이페이지</h2>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default MyPage;
