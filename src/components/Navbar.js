
import React from 'react';
import { Link } from "react-router-dom";

function Navbar () {
  return (
    <nav>
      <div className='navLinks'>
          <Link to='/search' className='link'>new search</Link> |
          <Link to='/favorites' className='link'> favorites</Link>

      </div>
    </nav>
  )
}

export default Navbar;
