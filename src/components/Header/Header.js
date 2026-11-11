import React from 'react';
import "./header.css";
import Netflix_logo from "../../assets/images/Netflix_logo.jpg"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Each menu item scrolls to a section of the page (row ids are set in RowList)
const scrollToId = (id) => {
    if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const MENU = [
    { label: "Home", target: "top" },
    { label: "TV Shows", target: "row-tv-shows" },
    { label: "Movies", target: "row-top-rated-movies" },
    { label: "Originals", target: "row-netflix-originals" },
    { label: "Documentaries", target: "row-documentaries" },
];

const Header = () => {
    return (
        <div className='header_outer_container'>
            <div className='header_container'>
                <div className='header_left'>
                    <ul>
                        <li><img src={Netflix_logo} alt="Netflix logo" className ="netflix-logo" width ="120"/></li>
                        <ul className= 'menu_list'>
                            {MENU.map((item) => (
                                <li key={item.label}>
                                    <button type="button" className="menu_link" onClick={() => scrollToId(item.target)}>
                                        {item.label}
                                    </button>
                                </li>
                            ))}
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
