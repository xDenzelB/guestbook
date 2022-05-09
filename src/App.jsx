import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth';
import EntryList from './views/EntryList';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
export default function App() {
  return (
      <UserProvider>
    <Switch>
      <Route path='/login'>
        <Auth />
      </Route>
      <PrivateRoute exact path='/'>
        <EntryList />
      </PrivateRoute>
      </Switch>
      </UserProvider>
  )
}
