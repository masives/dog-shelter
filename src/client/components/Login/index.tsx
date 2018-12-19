import * as React from 'react';

const Login = () => (
  <div>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        const user = { username: event.target[0].value, password: event.target[0].value };
        fetch('api/login', {
          body: user,
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' }
        });
      }}
    >
      <label htmlFor="username">
        username
        <input type="text" id="username" />
      </label>
      <br />
      <label htmlFor="password">
        password
        <input type="password" id="password" />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
);
export default Login;
