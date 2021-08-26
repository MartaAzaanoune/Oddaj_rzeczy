import logo from './assets/logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/" >Start</Link>
        </li>
        <li>
          <Link to="/o_co_chodzi" >O co chodzi?</Link>
        </li>
        <li>
          <Link to="/o_nas" >O nas</Link>
        </li>
        <li>
          <Link to="/fundacje_i_organizacje" >Fundacja i organizacje</Link>
        </li>
        <li>
          <Link to="/kontakt" >Kontakt</Link>
        </li>
        <li>
          <Link to="/zaloguj">Zaloguj</Link>
        </li>
        <li>
          <Link to="/zal_konto">Załóż konto</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/o_co_chodzi">
          <O_co_chodzi/>
        </Route>
        <Route path="/o_nas">
          <O_nas/>
        </Route>
        <Route path="/fundacje_i_organizacje">
          <Fundacje_i_organizacje/>
        </Route>
        <Route path="/kontakt">
          <Kontakt/>
        </Route>
        <Route path="/zaloguj">
          <Zaloguj/>
        </Route>
        <Route path="/zal_konto">
          <Konto/>
        </Route>


      </Switch>

    </Router>
  );
}

export default App;
