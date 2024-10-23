import React from 'react'
import { Link } from 'react-router-dom';
function Welcome() {
  return (
    <div>
      <h1>Welcome</h1>

  
      <Link to={'/login'}><button>LOGIN</button></Link>


      <Link to={'/register'}><button>REGISTER</button></Link>
    </div>
  )
}

export default Welcome
