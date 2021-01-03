import { Link } from "react-router-dom"
  

const Menu = () => {
    const padding = {
      paddingRight: 5
    }
    return (
      <div>
        <Link style={padding} to="/list">List</Link>
        <Link style={padding} to="/search">Search</Link>
      </div>
    )
  }

export default Menu