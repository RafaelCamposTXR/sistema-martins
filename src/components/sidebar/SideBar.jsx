import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './sidebar.scss';
import { IconContext } from 'react-icons';
import Backdrop from '../modal/backdrop/Backdrop';
import MenuIcon from '@mui/icons-material/MenuSharp';

function Sidebar({handleClose}) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const CloseSidebar = () => setSidebar(false);

  return (
    <>
      
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <MenuIcon sx={{ fontSize: "1.8rem"}} onClick={showSidebar} />
          </Link>
        </div>
        {sidebar && <Backdrop onClick={CloseSidebar}/>}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span style={{marginLeft: "0.7vw", fontSize: "1rem"}}>{item.title}</span>
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

export default Sidebar;