import logo from './logo.svg';
import './assets/css/app.css';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from './components/Auth/protected.router'
import Login from '../src/Pages/Login/Login';
import Dashboard from '../src/Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <body>
        <Switch>
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <Route path="/" exact component={Login} />
          <Route path="*" component={() => '404 NOT FOUND'} />
        </Switch>
      </body>
    </div>
  );
}

export default App;
