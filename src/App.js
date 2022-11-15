import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>

          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
