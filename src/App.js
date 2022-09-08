import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

import { Auth } from 'aws-amplify';

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user.attributes.email}
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default withAuthenticator (App, {
  socialProviders: ['apple','amazon','facebook','google']
});

async function resendConfirmationCode({ user }) {
  try {
      await Auth.resendSignUp(user.username);
      console.log('code resent successfully');
  } catch (err) {
      console.log('error resending code: ', err);
  }
}