import * as React from 'react';

const addUser = (event) => {
  event.preventDefault();
  const user = {
    password: event.target[1].value,
    username: event.target[0].value,
  };
  const request = new Request('api/users', {
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    method: 'POST',
  });
  fetch(request).then((response) => {
    if (response.ok) {
      console.log('user added', response);
      return;
    }
    console.log('error while adding user', response);
  });
};

const Login = () => (
  <div>
    <form onSubmit={addUser}>
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
