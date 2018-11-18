
import React from 'react';
import { Link } from "react-router-dom";

function Navbar () {
	return (
    <nav>
    	<div className='navWide'>
    		<div className='wideDiv'>
		      <Link to='/search'>new search</Link> | 
		      <Link to='/favorites'>favorites</Link>
		    </div>
		  </div>
		  <div className='navNarrow'>
		  	<div className='narrowLinks'>
		  		<Link to='/search'>new search</Link> | 
		      <Link to='/favorites'>favorites</Link>
		    </div>
		  </div>
    </nav>
	)
}

export default Navbar;
