import './App.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Inici from './pages/Inici';
import Cuiners from './pages/Cuiners';
import Plats from './pages/Plats';

function App() {

  return (
    <div className='App'>
      <BrowserRouter> 
        <nav>
          <h1>Les meves receptes</h1>
          <Link to="/Inici">Inici</Link>
          <Link to="/Plats">Plats</Link>
          <Link to="/Cuiners">Cuiners</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Inici/>
          </Route>

          <Route path="/Cuiners">
            <Cuiners/>
          </Route>

          <Route path="/Plats">
            <Plats/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
