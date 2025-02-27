import React from 'react';
import ReactDOM from 'react-dom';
import GitHubLogin from '../src/GitHubLogin';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

ReactDOM.render(
  <GitHubLogin
    clientId=""
    redirectUri=""
    onSuccess={onSuccess}
    onFailure={onFailure}
    render={({ onClick }) => <button onClick={onClick}>GitHub login</button>}
  />,
  document.getElementById('example'),
);
