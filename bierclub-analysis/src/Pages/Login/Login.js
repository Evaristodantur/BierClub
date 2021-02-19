import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import auth from '../../utils/auth';

export default function Login(props) {

  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const login = () => {
    let emailCondition = !/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      emailLogin
    );
    let passwordCondition = passwordLogin.length < 8;

    if(emailCondition) {
        document.getElementById('email').style.border = '2px red solid';
        setErrorMsg("* El email tiene que ser un email valido")
    } else {
        document.getElementById('email').style.border = '2px green solid';
    }

    if (passwordCondition) {
      document.getElementById('password').style.border = '2px red solid';
      setErrorMsg('* La contraseña debe ser mayor a 8 caracteres');
    } else {
      document.getElementById('password').style.border = '2px green solid';
    }

    if(!emailCondition || !passwordCondition) {
        axios({
          method: 'post',
          url: 'http://localhost:3000/api/bierclub/login',
          data: {
            email: emailLogin,
            password: passwordLogin,
          },
        }).then(({data: info}) => {
            console.log(info);
            if (info.meta.status == 404) {
                setErrorMsg(info.data.message);
            } else {
                auth.login(() => {
                  props.history.push('/dashboard');
                });
            }
        }).catch(err => {
            console.log(err.message);
        })
    }
  }

  return (
    <>
      <h1 className="title">BierClub Analysis</h1>
      <div className="login-container">
        <div className="login-form-div">
          <h1 className="login-title">Login</h1>
          <form className="form-login" onSubmit={(e) => e.preventDefault()}>
            <input
            id="email"
              name="email"
              type="email"
              placeholder="Escribe tu email"
              className="input-form"
              required
              onChange={(e) => {
                setEmailLogin(e.target.value);
              }}
            />
            <input
            id="password"
              name="password"
              type="password"
              placeholder="Escribe tu contraseña"
              className="input-form"
              required
              onChange={(e) => {
                setPasswordLogin(e.target.value);
              }}
            />
            <h5 className="err-msg">{errorMsg}</h5>
            <button className="btn-login" type="submit" onClick={login}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
