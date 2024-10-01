import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import amazonWhite from "../../assets/Images/amazon-white-logo.png";
import usFlag from "../../assets/Images/Us-flag.png";
import { BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.header_fixed}>
      <section>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <a href="/">
              <img src={amazonWhite} alt="amazon-logo" />
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <CiLocationOn />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div>
            {/* Search */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" placeholder="Search Product" />
              <BsSearch size={25} />
            </div>
          </div>
          <div className={classes.right_side_container}>
            {/* right-side-link */}
            <a className={classes.language}>
              <img src={usFlag} />
              <select>
                <option>EN</option>
              </select>
            </a>
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign out</span>
                  </>
                ) : (
                  <>
                    <p>Sign in</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;
