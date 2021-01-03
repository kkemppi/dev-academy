import { Link } from "react-router-dom"
import { sortAlphabetically, sortNumerically } from '../reducers/namesReducer'
import { useDispatch } from 'react-redux'
  

const Menu = () => {
    const dispatch = useDispatch()
    const padding = {
      paddingRight: 15
    }
    return (
      <div>
        <Link style={padding} to="/" onClick={() => dispatch(sortNumerically())}>List by most popular</Link>
        <Link style={padding} to="/alphabet" onClick={() => dispatch(sortAlphabetically())}>List alphabetically</Link>
        <Link style={padding} to="/search">Search</Link>
      </div>
    )
  }

export default Menu