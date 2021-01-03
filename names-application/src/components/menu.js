import { Link } from "react-router-dom"
import { sortAlphabetically, sortNumerically } from '../reducers/namesReducer'
  

const Menu = () => {
    const padding = {
      paddingRight: 15
    }
    return (
      <div>
        <Link style={padding} to="/" onClick={() => sortNumerically()}>List by most popular</Link>
        <Link style={padding} to="/alphabet" onClick={() => sortAlphabetically()}>List alphabetically</Link>
        <Link style={padding} to="/search">Search</Link>
      </div>
    )
  }

export default Menu