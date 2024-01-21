import "./Navbar.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItems } from "./MenuItems";
import { menuOpen } from "../../store/NavMenuSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../store/formSlice";

const Navbar = (props) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.form.isAuthenticated);

  const dispatch = useDispatch();

  const toggleMenu = useSelector((state) => state.menubar.showMenu);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin", true);
  };

  return (
    <>
      <div className="navItems">
        <div className="menu-icons" onClick={() => dispatch(menuOpen())}>
          <i
            className={toggleMenu ? "fa-solid fa-times" : "fa-solid fa-bars"}
          ></i>
        </div>

        <h1 className="navLogo" onClick={() => navigate("/", true)}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeN6VDV6OiQtZOh1wnOrQcp2LcUNPHhEBYFQ&usqp=CAU" width="60" height="5"/>
          GroMart
        </h1>

        <ul className={toggleMenu ? "navMenu active" : "navMenu"}>  
          {MenuItems.map((item, index) => (
            <li className={item.cName} key={index}>
              <a href={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          ))}
          <div className="wishList-cart">
              <span >
                <Link to="/wishlist">
                  <i className="fa-regular fa-heart"></i>
                </Link>
              </span>
              <span >
                <Link to="/cart">
                  <i className="fa-solid fa-cart-arrow-down"></i>
                </Link>
              </span>
            </div>
        </ul>

        <div>
          <div className="right-nav-buttons">
        

            <div>
              {isAuthenticated ? (
                <Link
                  to="/signin"
                  className="navSignInBtn"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              ) : (
                <Link to="/signin" className="navSignInBtn">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
