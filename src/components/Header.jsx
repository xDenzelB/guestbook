import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { signOutUser } from '../services/user';

export default function Header() {
  const { user, setUser } = useUser();

  async function handleSignOut() {
    setUser('');
    await signOutUser();
  };

  return (
    <div>
      {user?.email ? (
        <>
          <button onClick={handleSignOut}>
            Sign Out
        </button>
        </>
      ) : (
          <Link to='/login'>
            Sign In 
          </Link>
    )}
  </div>
)
}