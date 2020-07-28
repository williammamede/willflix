import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="WillFlix logo" />
            </a>
            <Button as="as" className="ButtonLink" href="/">
                Novo video
            </Button>
        </nav>
    );
}

export default Menu;