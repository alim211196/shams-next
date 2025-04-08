"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import headerLogo from "../../assets/images/shams-logo.svg";
import instuImg from "../../assets/images/instruter.png";
import { getS3ImageUrl, hideHeaderFooterPaths } from "@/app/utils/helper";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
const Header = () => {
  const { globalSettings } = useSelector((state) => state.settings);
  const pathname = usePathname();
  const token = Cookies.get("token");
  const shouldHideHeaderFooter = hideHeaderFooterPaths.includes(pathname);
  const getSetting = (key) => {
    const setting = globalSettings.find((item) => item.key === key);
    return setting ? setting.value : null;
  };

  return shouldHideHeaderFooter ? null : (
    <header
      style={
        getSetting("enable_sticky_header") === "true"
          ? {
              position: "sticky",
              top: 0,
              backgroundColor: "#fff",
              zIndex: 1000,
            }
          : {}
      }
    >
      {getSetting("show_promo_banner") === "true" && (
        <div className="header-top">
          <div className="container custom-container">
            <p>
              Limited-Time Offer: <span> Get 30% off</span> on all media
              training courses{" "}
              <Link href={getSetting("enroll_link")}>Enroll Now</Link>
            </p>
          </div>
        </div>
      )}

      <div className="header-middle">
        <nav className="navbar navbar-expand-xl">
          <div className="custom-container header-adjust">
            <a className="navbar-brand" href="#">
              <Image
                src={
                  getSetting("header_logo_img")
                    ? getS3ImageUrl("settings", getSetting("header_logo_img"))
                    : headerLogo
                }
                width={150}
                height={100}
                alt="Logo"
              />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className="row">
              <div
                className="collapse navbar-collapse tgmenu-action"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                  {getSetting("enable_explore_dropdown") === "true" && (
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Explore
                      </a>
                      <ul
                        className="dropdown-menu exlpreCourses"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="browseCourses">Browse Courses</div>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Media
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                TV Shows Analysis
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Media Literacy
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                News Anchoring Practice
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Hosting Webinars
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Podcast Creation
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Social Media Management
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Screenwriting Fundamentals
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Graphic Design Principles
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                User Experience Design
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Leadership and Management
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            HR
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            PR
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Digital environment
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Project Management
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Happiness and Positiveness
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Education
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Finance
                          </a>
                        </li>
                        <li className="dropdown-submenu">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Government workshop
                          </a>
                        </li>
                      </ul>
                    </li>
                  )}

                  <li className="nav-item">
                    <div className="header-search d-none d-md-block">
                      <form action="#" className="menu-search-form">
                        <div className="input-grp">
                          <input
                            type="text"
                            placeholder="Search For Course . . ."
                          />
                          <button type="submit" className="searchIcon"></button>
                        </div>
                      </form>
                    </div>
                  </li>

                  {getSetting("header_nav_label") ? (
                    getSetting("header_nav_label")?.map((label, index) => (
                      <li className="nav-item" key={index}>
                        <a
                          className="nav-link"
                          href={getSetting("header_nav_url")[index]}
                        >
                          {label}
                        </a>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Workshop
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Facilities
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Teach
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          SHAMS Corporate
                        </a>
                      </li>
                    </>
                  )}

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link cart-count btn"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        backgroundImage: `linear-gradient(90deg, #b0398d, #cf93b7)`,
                      }}
                    >
                      <span className="lang-icon"></span>
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li className="dropdown-submenu">
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="dropdown-item" href="#">
                          Arabic
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* )} */}
                  {/* {getSetting("enable_shop_option") == "true" && ( */}
                  <li className="nav-item mini-cart-icon">
                    <a href="#" className="cart-count btn">
                      <span className="cart-icon"></span>
                    </a>
                  </li>
                  <li className="nav-item mini-cart-icon">
                    <a href="#" className="cart-count btn">
                      <span className="bell-icon"></span>
                    </a>
                  </li>
                  {!token && (
                    <li className="nav-item header-btn login-btn">
                      <Link href="/login" className="btn">
                        Log in
                      </Link>
                    </li>
                  )}

                  {/* )} */}
                  {/* {getSetting("enable_join_now") == "true" && ( */}
                  {!token && (
                    <li className="nav-item header-btn signup-btn">
                      <Link href="#">Join Now</Link>
                    </li>
                  )}

                  {/* )} */}
                  {/* {getSetting("enable_user_avatar") == "true" && ( */}
                  {token && (
                    <li className="nav-item dropdown mini-cart-icon">
                      <a
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="cart-count btn"
                      >
                        <Image src={instuImg} alt="profile" />
                      </a>
                      <div
                        className="dropdown-menu profileDropdown"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <div className="userProfile">
                          <div className="profileImg">S</div>
                          <div className="profileContant">
                            <h2>Sammy</h2>
                            <p>Sam124@gmail.com</p>
                          </div>
                        </div>
                        <ul className="profileLink">
                          <li>
                            <a className="dropdown-item" href="#">
                              Dashboard
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a className="dropdown-item" href="#">
                              My Profile
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className="dropdown-item" href="#">
                              Logout
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </li>
                  )}
                  {/* )} */}
                </ul>

                {/* <div className="middle-menu-wrap">
                  
                  <div className="logo">
                    <Link href="#">
                      <Image src={headerLogo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="middle-right">
                   
                    <div className="exploreBtn">
                      <Link href="#">Explore</Link>
                    </div>

                    
                    <div className="header-search d-none d-md-block">
                      <form action="#" className="menu-search-form">
                        <div className="input-grp">
                          <input
                            type="text"
                            placeholder="Search For Course . . ."
                          />
                          <button type="submit" className="searchIcon"></button>
                        </div>
                      </form>
                    </div>

                   
                    <div className="tgmenu-action">
                      <ul className="list-wrap">
                        <li>
                          <Link href="#">Facilities</Link>
                        </li>
                        <li>
                          <Link href="#">Teach</Link>
                        </li>
                        <li>
                          <Link href="#">SHAMS Corporate</Link>
                        </li>
                        <li className="wishlist-icon">
                          <a href="#" className="cart-count btn">
                            <span className="lang-icon"></span>
                          </a>
                        </li>
                        <li className="mini-cart-icon">
                          <a href="#" className="cart-count btn">
                            <span className="cart-icon"></span>
                          </a>
                        </li>
                        <li className="header-btn login-btn">
                          <Link href="#" className="btn">
                            Log in
                          </Link>
                        </li>
                        <li className="header-btn signup-btn">
                          <Link href="#">Join Now</Link>
                        </li>
                        <li className="mini-cart-icon">
                          <a href="#" className="cart-count btn">
                            <Image src={instuImg} alt="profile" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
