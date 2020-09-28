import React from 'react'
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    return (

        <div className='header'>
            <Link to='/'>
            <img
                className="header__icon"
                src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/fr/e15/s1080x1080/120249574_982252525627724_5011324849589768319_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=108&_nc_ohc=3F6_JhHy8b8AX_kPev3&oh=2a43033205cf10c91b129316d4753057&oe=5F9B1886"
                alt="findastay logo"/>
            </Link>
            
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
                </div>
            

            <div className='header__right'>
                <p>Become a Host today</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

            </div>

        
    )
}

export default Header
