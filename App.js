
import { Route, Switch, NavLink } from "react-router-dom"; 
import './App.css';

import Soda from './Soda';
import Cookies from './Cookies';
import Fruits from './Fruits';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <NavLink exact activeClassName="active-link" to="/soda">
          Soda
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/cookies">
          Cookies
        </NavLink>
        <NavLink exact activeClassName="active-link" to="/fruits">
          Fruits
        </NavLink>
        <NavLink exact activeClassName="active-link" to="">
          Home
        </NavLink>
      </nav>
      <div>

      </div>
      <Switch>
        <Route exact path="/soda" render={() => <Soda name="Coca-Cola" />} />
        <Route exact path="/cookies" render={() => <Cookies name="Chocolate Chip" />} />
        <Route exact path="/fruits" render={() => <Fruits name="Strawberry" />} />
        <Route exact path="" render={() => <Home name="Home" />} />
      </Switch>
    </div>
  );
}

export default App;
