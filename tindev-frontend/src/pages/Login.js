import React from 'react';
import ReactDOM from 'react-dom';

import logo from '../assets/logo.svg';
import './Login.css';

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="TinDev" />
        <input placeholder="Digite o seu usuário do Github" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
