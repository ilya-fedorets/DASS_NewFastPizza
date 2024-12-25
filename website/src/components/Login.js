import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://newfastpizza.com/api/login', {
                username,
                password,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Ошибка авторизации');
        }
    };

    return (
        <div>
            <h2>Авторизация</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя пользователя:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <label>
                    Пароль:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Войти</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;