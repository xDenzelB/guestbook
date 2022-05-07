import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { signInUser, signUpUser } from '../services/user';
export default function Auth() {
  const history = useHistory();
  const { user, setUser } = useUser();
  const [signUp, setSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function signingUp() {
    setEmail('');
    setPassword('');
    setSignup((prevState) => !prevState);
  };

  async function handleSubmit(e) {
    setError('');
    try {
      e.preventDefault();
      const response = signUp
        ? await signUpUser({ email, password })
        : await signInUser({ email, password });
      
      setUser({ id: response.id, email: response.id });
      history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  if (user.email) return <Redirect to='/' />

  return (
    <div>
      <div>
      <h2>
        {signUp ? 'Create an Account!' : 'Sign n to your Account!'}
      </h2>
      <p>Or</p>
      <a onClick={signingUp}>
        {' '}
        {signUp ? 'Sign into your Account!' : 'Create and Account!'}
      </a>
      </div>
      <form onSubmit={handleSubmit}>
        
      </form>
    </div>
  )
}
