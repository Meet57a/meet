import { Link } from 'react-router-dom';
import * as React from 'react';
import '../css/header.css';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const options = [
    'Home',
    'About',
    'Services',
    'Projects',
    'Resume',
    'Contact'
];



const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const click = [
        '/meet/',
        '/meet/#home-section-2',
        '/meet/services',
        '/meet/projects',
        '/meet/resume',
        '/meet/#contact'
    ]

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleActive = () => {
        const link = document.querySelectorAll('.header-links a');


        link.forEach((a) => {

            a.classList.remove('active');
            if (a.getAttribute('href') === location.pathname) {
                a.classList.add('active');
            }
        });
    }




    window.onscroll = () => {
        const section = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.header-links a');
        section.forEach((section) => {
            let top = window.scrollY;
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');
            
            if (top >= offset && top < offset + height) {
                navLinks.forEach((links) => {
                    if (id !== "home-section-1") {
                        links.classList.remove('active');
                    }
                });
                const currentLink = document.querySelector('.header-links a[href*=' + id + ']');
                if (currentLink) {
                    currentLink.classList.add('active');
                }
                if (id === "home-section-1") {
                    navLinks.forEach((links) => {
                        links.classList.remove('active')
                    })
                    navLinks[0].classList.add('active')
                } else if (id === "home-section-3") {
                    navLinks.forEach((links) => {
                        links.classList.remove('active')
                    })
                    navLinks[2].classList.add('active')
                }
                if (id === "home-section-1" || id === "home-section-3" || id === "home-section-5") {
                    document.getElementById('header').style.backgroundColor = '#020617';
                } else {
                    document.getElementById('header').style.backgroundColor = '#111827';
                }
            }
        });
    };



    useEffect(() => {
        handleActive();

    }, [location]);

    return (
        <div className='header' id='header'>
            <div className='header-logo'>
                MEET
            </div>
            <div className='header-links'>
                <Link to='/meet/' onClick={handleActive}>Home</Link>
                <a href='/meet/#home-section-2'>About</a>
                <Link to='/meet/services' onClick={handleActive}>Services</Link>
                <Link to='/meet/projects' onClick={handleActive}>Projects</Link>
                <Link to='/meet/resume' onClick={handleActive}>Resume</Link>
                <a href='/meet#contact'>Contact</a>
            </div>
            <div className='header-mobile-links'>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? 'long-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        paper: {
                            style: {
                                width: '20ch',
                                backgroundColor: '#020617'
                            },
                        },
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={() => { navigate(click[index]); setAnchorEl(null); }} style={location.pathname == click[index] ? { color: "#eab308" } : {}}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </div>
    )
}
export default Header;