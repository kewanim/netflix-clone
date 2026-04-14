import React from 'react';
import "./header.css";
import Netflix_logo from "../../assets/images/Netflix_logo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
    return (
        // <div>Header</div>
        <div className='header_outer_container'>
            <div className='header_container'>
                <div className='header_left'>
                    <ul>
                        <li><img src={Netflix_logo} alt="Netflix logo" className ="netflix-logo" width ="120"/></li>
                        <ul className= 'menu_list'>  
                            {/* <li>Netflix</li> */}
                            <li>Home</li>
                            <li>TVShows</li>
                            <li>Movies</li>
                            <li>Latest</li>
                            <li>MyList</li>
                            <li>Browse by Languages</li>
                        </ul>
                    </ul>
                </div>
                <div className='header_right'>
                    <ul>
                        <li><SearchIcon /></li>
                        <li><NotificationsNoneIcon/></li>
                        <li><AccountBoxIcon/></li>
                        <li><ArrowDropDownIcon/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;