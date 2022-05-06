import { Route, Switch } from 'react-router-dom';
import Auth from './views/Auth';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
export default function App() {
  return (
    <Switch>
      <Route path='/login'>
        <Auth />
      </Route>
    </Switch>
  )
}
