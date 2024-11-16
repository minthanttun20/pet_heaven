import { Link, useLocation } from 'react-router-dom';
import { MdClose, MdMenu} from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

import { FaLock } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { auth } from '../firebase';

const Navbar = () => {
    // Menu Items
    const navLinks = [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
        { title: 'Services', url: '/services', sublinks: [
            { url: '/adopt', title: 'Adoption' },
            { url: '/release', title: 'Release Pet' },
            { url: '/volunter', title: 'Volunteering' },
            { url: '/donation', title: 'Donation' },
            {url: '/blogs', title: 'Blog'},
            {url: '/review', title: 'Review'}
        ] },
        { title: 'Contact', url: '/contact' }
    ];

    const [user, setUser] = useState();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                setUser(user);
            }
        });
    }, []);

    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen); // Track the menu open or not
    const closeMenu = () => setMenuOpen(false); 


    return (
       <header className='header'>
            <div className='header1'>
                <Link to='/' className='title'>Pet Heaven</Link>
                <button className='menu' onClick={toggleMenu}>
                    {menuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </div>
            <nav className={`navbar ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.url} className={`nav-item ${link.sublinks ? 'has-dropdown' : ''}`}>
                            {link.sublinks ? (
                                 <span className="dropdown-toggle">{link.title}</span>
                            ) : 
                            (
                                <Link 
                                to={link.url} 
                                className={location.pathname === link.url ? 'active-link' : ''}
                                onClick={closeMenu}
                                >
                                {link.title}
                                </Link>
                            )}
                            {link.sublinks && (
                                <ul className="dropdown-menu">
                                    {link.sublinks.map((sublink) => (
                                        <li key={sublink.url} onClick={closeMenu}>
                                            <Link 
                                                to={sublink.url} 
                                                className={location.pathname === sublink.url ? 'active-link' : ''}
                                            >
                                                {sublink.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                {user ? <Link to='/profile' className={`${location.pathname === '/profile' ? 'active-link-login' : 'login-btn'}`}><IoMdPerson />Profile</Link>
                 : <Link to='/login' className={`${location.pathname === '/login' ? 'active-link-login' : 'login-btn'}`} onClick={closeMenu}><FaLock /> Log In</Link>}

            </nav>

       </header>
    );
}

export default Navbar;
