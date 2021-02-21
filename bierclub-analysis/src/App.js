import './app.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './utils/protected.router'
import Login from '../src/Pages/Login/Login';
import Dashboard from '../src/Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
        <Switch>
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="*" component={() => <Redirect to="/dashboard" />} />
        </Switch>
    </div>
  );
}

export default App;
