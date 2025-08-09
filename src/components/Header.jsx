import { useContext } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../providers/AuthProvider";
import logo from "../assets/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/available-food" className="hover:underline">
          Available Foods
        </NavLink>
      </li>

      {user && (
        <li tabIndex={0} className="dropdown">
          <label className="btn btn-ghost rounded-btn">
            Dashboard{" "}
            <svg
              className="ml-1 w-4 h-4 inline"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/dashboard/profile" className="hover:underline">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-food" className="hover:underline">
                Add Food
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-food" className="hover:underline">
                My Foods
              </NavLink>
            </li>
            <li>
              <NavLink to="/request" className="hover:underline">
                My Request
              </NavLink>
            </li>
          </ul>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 fixed top-0 w-full z-50 shadow-sm ">
      {/* Left - Logo and name */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-xl lg:hidden"
          >
            <CiMenuBurger />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-gray-800 rounded-box w-52 z-10"
          >
            {links}
          </ul>
        </div>
        <img
          className="hidden lg:block w-10 h-10 rounded mr-2"
          src={logo}
          alt="Logo"
        />
        <span className="font-bold text-lg">Food Sharing</span>
      </div>

      {/* Center - Menu Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right Login */}
      <div className="navbar-end flex items-center gap-3">
        {/* Login Button */}
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user.photoURL}
                title={user.displayName}
                alt="user"
                className="w-12 h-12 rounded-full cursor-pointer"
              />

              <Link to="/login">
                <button onClick={logOut} className="btn">
                  Sign Out
                </button>
              </Link>
            </>
          ) : (
            <>
              <NavLink className="btn mr-1" to="/login">
                Login
              </NavLink>
              <NavLink className="btn" to="/registration">
                Register
              </NavLink>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
