

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <ul className='navbar'>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to= "/products">Products</Link></li>
          <li><Link className="link" to = "/register" >Sign Up</Link></li>
          
        </ul>
      </div>
    </div>
  )
}


export  {Header}