import {
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom"
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { initData } from './reducers/namesReducer'
import Menu from './components/menu'
import AlphabetList from './components/names_alphabet'


function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initData())
  }, [dispatch])

  return (
    <div>
      <h1>Solita-dev-academy names-application</h1>
      <div>
        Mikko Kemppi, kemppi.mikko@gmail.com
      </div>
      <br/>
      <Menu/>
      <Switch>
        <Route path='/'>
          <AlphabetList/>
        </Route>
        <Route path='/search'>
          
        </Route>
      </Switch>
    </div>
  )
}

export default App;
