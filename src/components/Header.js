import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <header className='header'>
        <div className='content-container'>
            <div className='header__content' >
                <img className='header__logo' src='/images/Mobilize_logo.png' alt='Mobilize' />
            </div>
        </div>
    </header>
)

export default Header