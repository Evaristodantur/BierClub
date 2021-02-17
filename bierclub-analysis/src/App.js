import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <body>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
