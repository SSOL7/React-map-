import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import tiger from './tiger.jpg';
import eagle from './eagle.jpeg';


function About() {
  return (
    <div className='about'>

      <h2>Image links to animals or birds page</h2>


      <div className='image-link'>
      <NavLink to='/'><img className='image-link' src={tiger} alt="" /></NavLink>
      <span>Animals</span>
      </div>

      <div className='image-link'>
      <NavLink to='/birds'> <img className='image-link' src={eagle} alt="" /> </NavLink>
      <span>Birds</span>
      </div>

    </div>
  )
}

export default About