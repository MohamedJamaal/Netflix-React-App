import React from 'react'
// import Button from '../button/Button'
import SearchIcon from '@material-ui/icons/Search'
import CardGiftCardIcon from '@material-ui/icons/CardGiftcard'
import NotificationIcon from '@material-ui/icons/Notifications'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import './Navbar.css'

interface Props {
    only_logo: boolean;
    porfile_url?: string; // ? means it is not always given
}

export default function Navbar({only_logo, porfile_url}: Props) {
    if (only_logo) {
        return (
            <div className="navbar-container">
                <img className="logo" alt="" src="assets/images/netflix-logo.svg" />
            </div>
        );
    } else {
        return (
            <div className="navbar-container" >
                <img className="logo" alt="" src="assets/images/netflix-logo.svg" />

                <button className="button-tertiary button-tertiary-active">Home</button>
                <button className="button-tertiary">Series</button>
                <button className="button-tertiary">Films</button>
                <button className="button-tertiary">Latest</button>
                <button className="button-tertiary">My List</button>

                <div className="spacer"></div>
                <SearchIcon />
                <CardGiftCardIcon />
                <NotificationIcon />
                { porfile_url && <img className="profile-image" src={porfile_url} alt="" />}
                <ArrowDropDown />
            </div >
        );
    }
}
