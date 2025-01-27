import React from "react";
import logo from "../images/Logo.png";
import logo1 from "../images/logo1.png";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./navstyle.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useAuth } from "../Store/auth";
const NavBar = () => {
  const { isLoggedIn, user } = useAuth();
  const [show, setshow] = useState(true);
  const handleShow = () => {
    show ? setshow(false) : setshow(true);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      
    });
    setshow(true);
  };

  return (
    <>
      <div className="navtop flex items-center justify-center">
        <div
          className="text-center slidedown1 heading md:text-2xl lg:text-3xl text-sm p-4 font-semibold  "
          style={{ color: "rgb(98, 62, 8)" }}
        >
          A Free Night Education Center By Students Of JGEC{" "}
        </div>
        <div className="text-3xl lg:flex  gap-4 text-[#ffffffc4] lg:absolute md:hidden hidden right-10">
          <a
            href="https://www.facebook.com/jgecjyoti?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
            className=" cursor-pointer hover:scale-110 transition-all"
          >
            <FaFacebook />
          </a>
          <a
            href="/"
            className=" cursor-pointer hover:scale-110 transition-all"
          >
            <MdEmail />
          </a>
        </div>
      </div>
      <div className=" flex  backgroundnav lg:justify-center md:justify-between w-full lg:px-8 px-4 items-center bg-slate-200 ">
        <div className="lg:block md:hidden hidden">
          <img
            src={logo}
            className="z-20 lg:w-[12%] slideleft md:w-[15%] w-[20%] lg:absolute md:absolute md:left-4 lg:left-10 lg:my-[-95px] md:my-[-75px]  "
            alt=""
          />
        </div>
        <img
          src={logo}
          className="z-20 lg:hidden md:block block slideleft md:w-[15%] w-[20%] "
          alt=""
        />

        <div className="py-4 font-semibold fadein heading md:mx-[2.5rem] lg:ml-10 lg:text-5xl md:text-4xl text-2xl text-center  text-[#d65b4b] ">
          JYOTI - A RAY OF HOPE
        </div>
        <img
          src={logo1}
          className="lg:w-[5%] logo2nd w-[12%] md:w-[8%] lg:absolute md:right-8 lg:right-14"
          alt=""
        />
      </div>
      <div className="lg:hidden navtop w-full md:hidden absolute  text-3xl font-medium pl-4 ">
        <div>
          <RxHamburgerMenu
            className="border-[2px] border-blue-950 my-1 rounded-[3px]  "
            onClick={handleShow}
          />
        </div>
      </div>

      <nav className="z-10 top-0 w-full bg-orange-400  lg:block md:block hidden sticky overflow-hidden">
        <ul className=" md:flex  lg:pt-0 md:pt-0 pt-10 lg:flex block">
          <li>
            <NavLink
              to="/"
              className="md:text-xl nonmobilenav-1 lg:text-[22px]"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className="md:text-xl nonmobilenav-2 lg:text-[22px]"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className="md:text-xl nonmobilenav-3 lg:text-[22px]"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notice"
              className="md:text-xl nonmobilenav-4 lg:text-[22px]"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Notice
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              className="md:text-xl nonmobilenav-5 lg:text-[22px]"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="md:text-xl nonmobilenav-6 lg:text-[22px]"
              style={({ isActive }) =>
                isActive ? { backgroundColor: "rgba(189, 125, 30, 0.587)" } : {}
              }
              onClick={scrollToTop}
            >
              Contact
            </NavLink>
          </li>
          {isLoggedIn && user?.isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/admin/users"
                  className="md:text-xl nonmobilenav-7 lg:text-[22px]"
                  style={({ isActive }) =>
                    isActive
                      ? { backgroundColor: "rgba(189, 125, 30, 0.587)" }
                      : {}
                  }
                  onClick={scrollToTop}
                >
                  Admin
                </NavLink>
              </li>
            </>
          ) : null}
        </ul>
      </nav>
      {!show ? (
        <nav className=" top-[150px] absolute w-full bg-orange-400  z-10  overflow-hidden">
          <div
            className="lg:hidden pt-2 navtop w-full md:hidden  flex justify-end   text-2xl font-bold p-4 "
            onClick={handleShow}
          >
            <div className="border-[2px] border-amber-800 rounded-[4px] p-1 bg-[#ffffff46]">
              <RxCross1 />
            </div>
          </div>
          <div className="w-full h-[4px] block lg:hidden md:hidden bg-[#412913]"></div>

          <ul className=" md:flex relative  lg:pt-0 md:pt-0 pt-4 lg:flex block">
            <li>
              <NavLink
                to="/"
                className="md:text-xl nav-1 text-[20px] lg:text-[22px]"
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: "rgba(189, 125, 30, 0.587)",
                        width: "100%",
                      }
                    : {}
                }
                onClick={scrollToTop}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className="md:text-xl nav-2 text-[20px] lg:text-[22px]"
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "rgba(189, 125, 30, 0.587)" }
                    : {}
                }
                onClick={scrollToTop}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/team"
                className="md:text-xl nav-3 text-[20px] lg:text-[22px]"
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "rgba(189, 125, 30, 0.587)" }
                    : {}
                }
                onClick={scrollToTop}
              >
                Team
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/notice"
                className="md:text-xl nav-4 text-[20px] lg:text-[22px]"
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "rgba(189, 125, 30, 0.587)" }
                    : {}
                }
                onClick={scrollToTop}
              >
                Notice
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/verify"
                className="md:text-xl nav-5 text-[20px] lg:text-[22px]"
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "rgba(189, 125, 30, 0.587)" }
                    : {}
                }
                onClick={scrollToTop}
              >
                Verify
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className="md:text-xl nav-6 text-[20px] lg:text-[22px]"
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "rgba(189, 125, 30, 0.587)" }
                    : {}
                }
                onClick={scrollToTop}
              >
                Support
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="md:text-xl nav-7 text-[20px] lg:text-[22px]"
                style={({ isActive }) =>
                  isActive
                    ? { backgroundColor: "rgba(189, 125, 30, 0.587)" }
                    : {}
                }
                onClick={scrollToTop}
              >
                Contact
              </NavLink>
            </li>
            {isLoggedIn && user?.isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/admin/users"
                    className="md:text-xl nav-8 text-xl lg:text-[22px]"
                    style={({ isActive }) =>
                      isActive
                        ? { backgroundColor: "rgba(189, 125, 30, 0.587)" }
                        : {}
                    }
                    onClick={scrollToTop}
                  >
                    Admin
                  </NavLink>
                </li>
              </>
            ) : null}
          </ul>
          <div className="w-full h-[6px] block lg:hidden md:hidden bg-[#412913]"></div>
        </nav>
        
      ) : null}
      <div className="w-full h-[6px] hidden  lg:block md:block bg-[#412913]"></div>
    </>
  );
};

export default NavBar;
