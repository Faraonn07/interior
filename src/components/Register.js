import React from 'react';
import './Register.css'; // Впишіть правильний шлях до вашого CSS файлу

export default function Register() {
  return (
    <div id="register-container">
      <div id="particles-js"></div>
      <div id="register-box">
        <h2>Create Account</h2>
        <form name="form1" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
            <input type="password" id="pwd" name="password" required />
            <div id="eye" onClick={togglePass}></div>
          </div>
          <div id="msg"></div>
          <button onClick={checkStuff}>Register</button>
        </form>
      </div>
    </div>
  );
}

function togglePass() {
  const pwd = document.getElementById('pwd');
  const eye = document.getElementById('eye');

  eye.classList.toggle('active');
  pwd.type === 'password' ? (pwd.type = 'text') : (pwd.type = 'password');
}

function checkStuff() {
  const email = document.form1.email;
  const password = document.form1.password;
  const msg = document.getElementById('msg');

  if (email.value === '') {
    msg.style.display = 'block';
    msg.innerHTML = 'Please enter your email';
    email.focus();
    return false;
  } else {
    msg.innerHTML = '';
  }

  if (password.value === '') {
    msg.innerHTML = 'Please enter your password';
    password.focus();
    return false;
  } else {
    msg.innerHTML = '';
  }

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.value)) {
    msg.innerHTML = 'Please enter a valid email';
    email.focus();
    return false;
  } else {
    msg.innerHTML = '';
  }
}
