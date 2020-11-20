import React from 'react'
import logo from './logo.svg'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {

    return (
        <div className="header-box">
           
            <Link to="/" className="logo">
            {/* Google Books */}
            <img src={logo} alt="logo" />
            </Link>

            <div className="header-text">
                <h1 className='header-title'>My Books</h1>
                <div className='nav'>
                    <NavLink to="/" exact activeClassName="active">
                        Home
                </NavLink>

                    <NavLink to="/details" activeClassName="active" >
                        Details
                </NavLink>

                    <NavLink to="/favorites" activeClassName="active" >
                        Favorites
                </NavLink>

                </div>
            </div>
        </div>
    )
}

//  class Header extends React.Component {
//     render() {
//       return (
//           <div className="header">
//         <div className="header-right">

//            <NavLink to='/' exact activeClassName="active" onClick={()=>console.log('a')}>Home</NavLink>
//             <NavLink to='/details' activeClassName="active" onClick={()=>console.log('a')}>Details</NavLink>
//            <NavLink to='/favorites' activeClassName="active" onClick={()=>console.log('a')}>Favorites</NavLink>

//         </div>
//         </div>
//       );
//     }
//   }
//   export default Header