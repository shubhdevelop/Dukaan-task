import "./sidebar.css";
import { Link, NavLink } from "react-router-dom";
import ProfilePicture from "../../assets/Image.png";
import arrow from "../../assets/Vector.svg";
import Home from "../../assets/Navbar/Home.svg";
import Orders from "../../assets/Navbar/Orders.svg";
import Products from "../../assets/Navbar/Products.svg";
import Delivery from "../../assets/Navbar/Delivery.svg";
import Analytics from "../../assets/Navbar/Analytics.svg";
import Payments from "../../assets/Navbar/Payments.svg";
import Tools from "../../assets/Navbar//Tools.svg";
import Discounts from "../../assets/Navbar/Discounts.svg";
import Audience from "../../assets/Navbar/Audience.svg";
import Appearance from "../../assets/Navbar/Appearance.svg";
import Plugins from "../../assets/Navbar/Plugins.svg";
import Wallet from "../../assets/wallet.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav-container">
        <div className="Profile">
          <img src={ProfilePicture} width={"39px"} height={"39px"} alt="" />
          <div>
            <p
              style={{
                textDecoration: "bold",
                color: "white",
              }}
            >
              Nishyan
            </p>
            <Link
              to=""
              style={{
                textDecoration: "underline",
                color: "white",
                fontSize: "13px",
              }}
            >
              Visit Store{" "}
            </Link>
          </div>
          <img src={arrow} width={"15px"} height={"8.68px"} />{" "}
        </div>
        <div className="nav">
          <NavLink className="navlink" to="/dashboard">
            <img src={Home} /> Home
          </NavLink>
          <NavLink className="navlink" to="/">
            <img src={Orders} /> Orders
          </NavLink>
          <NavLink className="navlink" to="/">
            <img src={Products} /> Products
          </NavLink>
          <NavLink className="navlink" to="/">
            <img src={Delivery} /> Delivery
          </NavLink>
          <NavLink className="navlink" to="/">
            <img src={Analytics} /> Analytics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "onActiveNavlink" : ""} navlink`
            }
            to="/payments"
          >
            <img src={Payments} /> Payments
          </NavLink>
          <NavLink className="navlink" to="/">
            <img src={Tools} /> Tools
          </NavLink>
          <NavLink className="navlink" to="/">
            <img src={Discounts} /> Discounts
          </NavLink>
          <NavLink className="navlink" to="/">
            <img src={Audience} /> Audience
          </NavLink>
          <NavLink className="navlink" to="/">
            <img src={Appearance} /> Appearance
          </NavLink>
          <NavLink className="navlink" to="/">
            <img src={Plugins} /> Plugins
          </NavLink>
        </div>
      </div>
      <div className="balance">
        <div className="icon">
          <img src={Wallet} />
        </div>
        <div>
          <p style={{ fontSize: "13px" }}>Available credits</p>
          <p className="amount">222.10</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
