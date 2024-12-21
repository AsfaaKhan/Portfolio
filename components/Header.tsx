"use client"
import Link from "next/link";
import { useState } from "react";
import { ImMenu3 } from "react-icons/im";
import { ImMenu4 } from "react-icons/im";
import Image from "next/image";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    const handleNavbar = () => {
        setNavbar(!navbar);
    }

    return (
        <div>

            {/*               NAVBAR                  */}

            <nav className=" navbar">
                <div className="navContainer ">
                    {/*             LOGO                    */}
                    <div className="logo  ">
                        <Image src={"/images/portfolio.png"}
                            alt="logo"
                            width={40}
                            height={40}
                        >

                        </Image>
                        <h1 >Portfolio</h1>
                    </div>

                    {/*             NAVBAR ITEMS                  */}
                    <div className=" nav-links">
                        <ul>
                            <li>
                                <Link className="nav-link " href="/">Home </Link>
                            </li>
                            <li>
                                <Link className=" nav-link" href="/aboutPage">About</Link>
                            </li>
                            <li>
                                <Link className=" nav-link" href="/projectPage">Projects</Link>
                            </li>
                            <li>
                                <Link className=" nav-link" href="/contactPage">Contact</Link>
                            </li>

                        </ul>
                    </div>


                    {/* HAMBURGER FOR SMALL DEVICES / MOBILES  */}
                    <div className="hamburger" onClick={handleNavbar} >
                        {navbar ? < ImMenu4 style={{ color: "#1d1111" }} /> : < ImMenu3 style={{ color: "#1d1111" }} />}
                    </div>
                </div>

                {navbar && (
                    <div className="mobile-nav">
                        <ul>
                            <li>
                                <Link className=" nav-link" href="/">Home </Link>
                            </li>
                            <li>
                                <Link className="nav-link " href="/aboutPage">About</Link>
                            </li>
                            <li>
                                <Link className=" nav-link" href="/projectPage">Project</Link>
                            </li>
                            <li>
                                <Link className=" nav-link" href="/contactPage">Contact </Link>
                            </li>
                        </ul>
                    </div>
                )}

                </nav>
                </div>)}
export default Navbar