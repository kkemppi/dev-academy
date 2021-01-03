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
import NamesList from './components/namesList'


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
        <Route path='/alphabet'>
          <NamesList/>
        </Route>
        <Route path='/'>
          <NamesList/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
