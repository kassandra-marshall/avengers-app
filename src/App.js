import React, {useState} from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import AvengersList from './Components/AvengersList'
import Avenger from './Components/Avenger';
import avengers from './data';
import './styles.css'


function App() {
  const [hero, setHero] = useState([...avengers]);

  return (
    <div className="App">
      <header className="App-header">
        <ul className='navbar'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/avengers'>Avengers</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' component ={Home}/>
          <Route path='/avengers/:hero' component={AvengersList}>
            <Avenger key={hero.id} hero={hero}/>
          </Route>
          <Route path='/avengers/'>
            <AvengersList hero={hero} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
