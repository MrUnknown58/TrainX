import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Frontpage from './Frontpage'

const Home = () => {
  return (
    <Fragment>
    {/* <div className='nav-container'>
      <Navbar/>
    </div> */}
    <div className='home-container'>
      <Frontpage/>
    </div>
    </Fragment>
  )
}

export default Home;