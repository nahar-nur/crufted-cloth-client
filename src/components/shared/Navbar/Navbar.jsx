import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import userDefaultPic from '../../../assets/textileArts/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const {user, logOut} =useContext(AuthContext);
    const handleLogOut =()=>{
        logOut()
        .then(()=>console.log('user logged out successfully'))
        .catch(error=>console.log(error));
    }
    const navLinks = <>
        <li><a><NavLink className={({ isActive }) =>
  isActive ? 'text-primary font-bold' : 'font-bold'
} to='/'>Home</NavLink></a></li>
        <li><a><NavLink className={({ isActive }) =>
  isActive ? 'text-primary font-bold' : 'font-bold'
} to='/allCrafts'>All Art & Craft Items</NavLink></a></li>
        <li><a><NavLink className={({ isActive }) =>
  isActive ? 'text-primary font-bold' : 'font-bold'
} to='/addItem'>Add Craft Item</NavLink></a></li>
        <li><a><NavLink className={({ isActive }) =>
  isActive ? 'text-primary font-bold' : 'font-bold'
} to='/craftList'>My Art & Craft List</NavLink></a></li>


    </>
    return (
        <div>
            <div className="navbar bg-base-100 bg-sky-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-pink-500">Crafted Cloth</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={userDefaultPic} />
                        </div>
                        </div>
                        
                        {
                            user ? <>
                            <span>{user.email}</span>
                            <btn  onClick={handleLogOut} className="btn btn-secondary btn-sm"> Sign Out</btn>
                            </>
                          : <Link to='/login' >
                           <btn className="btn btn-primary btn-sm">LOGIN</btn>
                       </Link>
                        }
                       
                        

                       
                       
                       
                    </div>
                </div> 
        </div>
    );
};

export default Navbar;