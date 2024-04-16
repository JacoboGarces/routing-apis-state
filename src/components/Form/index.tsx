import { ReactElement } from 'react';
import './style.css';
import { useAuth } from '../../hooks/useAuth';

export const Form = (): ReactElement => {
  const { authenticate, error } = useAuth();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const userName = event.target.elements.userName.value;
    const password = event.target.elements.password.value;
    authenticate(userName, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Enter credentials</legend>

        <label>
          UserName:
          <input type="text" name='userName' />
        </label>

        <label>
          Password:
          <input type="password" name='password' />
        </label>
      </fieldset>
      <button>Send</button>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </form>
  );
}