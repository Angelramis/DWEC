import './App.css';
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import Inici from './pages/Inici';
import Cuiners from './pages/Cuiners';
import Plats from './pages/Plats';
import Recepta from './pages/Recepta';

function App() {

  return (
    <div className='App'>
      <BrowserRouter> 
        <nav>
          <h1>Les meves receptes</h1>
          <NavLink exact to="/Inici">Inici</NavLink>
          <NavLink to="/Plats">Plats</NavLink>
          <NavLink to="/Cuiners">Cuiners</NavLink>
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

          <Route path="/receptes/:id"> {/* Apunta a endpoint*/}
            <Plats/>
          </Route>

          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
