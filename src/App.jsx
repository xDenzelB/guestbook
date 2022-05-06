import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
export default function App() {
  return (
      <UserProvider>
    <Switch>
      <Route path='/login'>
        <Auth />
      </Route>
      <PrivateRoute path='/dashboard'>
        <Dashboard />
      </PrivateRoute>
      <Route path='/'>
        <Home />
      </Route>
      </Switch>
      </UserProvider>
  )
}
