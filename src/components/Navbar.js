import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideBarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const navMenu = `bg-primary w-64 h-screen flex justify-center fixed top-0 delay-700`;
    const navMenuActive = `active:left-0 duration-300 ease-in-out active:delay-200 duration-300`
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='bg-primary h-20 flex justify-items-start items-center'>
                    <Link to='#' className='m-8 text-3xl bg-none'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>

                <nav className={sidebar ?  `${navMenu} ${navMenuActive}` : `${navMenu} left-full`  }>
                    <ul className='w-full' onClick={showSidebar}>
                        <li className='bg-primary w-full h-20 flex justify-start items-center'>
                            <Link to='#' className='m-8 text-3xl bg-none'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link className="list-none text-primary text-lg w-12/13 h-full flex items-center pt-0 pr-4 rounded" to={item.path}>
                                        {item.icon}
                                        <span className="ml-4">{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;