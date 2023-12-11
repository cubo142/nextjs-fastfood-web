
import React from 'react'
import SearchButton from './components/SearchButton'

const NavBar = () => {
    const iconStyle = {
        height: "24px",
        width: "24px",
    }
    return (
        <div className='bg-base-100'>
            <div className="navbar bg-base-100 mx-auto p-0 lg:w-8/12 ">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl w-fit">daisyUI</a>
                    {/* btn quick menu */}
                    <div className="dropdown hidden lg:block">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <SearchButton />
                </div>
                <div className="navbar-end">

                    {/* btn user */}
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                    {/* btn cart */}
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>

                    {/* btn globalize */}
                    <div className="dropdown">
                        <button className="global btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                                <span className=" w-8 h-8 bg-transparent border-none badge badge-xs badge-primary indicator-item">
                                    <img style={iconStyle} src='https://flagicons.lipis.dev/flags/4x3/vn.svg' />
                                </span>
                            </div>
                        </button>
                        <ul tabIndex={0} className=" relative menu menu-sm dropdown-content mt-3 z-[1] p-2 right-0 shadow bg-base-100 rounded-box w-32">
                            <li>
                                <a>
                                    <span><img style={iconStyle} src='https://flagicons.lipis.dev/flags/4x3/um.svg' /> </span>English
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default NavBar