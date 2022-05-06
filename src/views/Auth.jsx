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
  return (
    <div>Auth</div>
  )
}
