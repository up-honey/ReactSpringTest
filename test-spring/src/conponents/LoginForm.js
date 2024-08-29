// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8282/login', {
        username,
        password
      }, { withCredentials: true }); // 쿠키를 포함해서 전송합니다.

      if (response.status === 200) {
        // 로그인 성공 처리
        console.log('로그인 성공!');
        console.log(`사용자 ID: ${username}`);
        window.location.href = '/mypage'; // 로그인 후 마이페이지로 리다이렉트
      }
    } catch (err) {
      setError('로그인 실패: 사용자 이름 또는 비밀번호가 올바르지 않습니다.');
      console.error('로그인 실패:', err);
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">사용자 이름:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;
