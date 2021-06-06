
import './../App.css';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import './../Styles/Header.css'
import { IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom';
import HelpIcon from '@material-ui/icons/Help';

function Header() {
  return (
    <div className="header">
      <Link to="/home">
      <IconButton>
        <HomeIcon fontSize="medium" className="header__icon header__homeIcon"/>
        </IconButton>
      </Link>
        <Link to="/">
        <div className="header__title">
     <MenuBookIcon  fontSize="medium"/>
     <h3>Find My Books</h3>
         </div>
        </Link>
     
         <Link to="/help">
         <IconButton>
     <HelpIcon  fontSize="medium"  className="header__icon header__profileIcon"/>
        </IconButton>
         </Link>
     
    
    </div>
  );
}

export default Header;