// moje szafki, moje produkty, lista zakupow, o aplikacji
import React, { useState, useEffect } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link , Outlet} from "react-router-dom";
import { RegisterModal } from './RegisterModal.js';
import  LoginModal  from './LoginModal.js';
import myAxios from '../../utilities/MyAxios.js';
import { MyButton } from './../button/MyButton.js';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../features/user/userSlice'
import './Navigation.css';

function Navigation() {

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()


    const [click, setClick] = useState(false);
    const [visLogin, setVisLogin] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showLoginButton = () => {
        if (window.innerWidth <= 1010) {
            setVisLogin(false);
        } else {
            setVisLogin(true);
        }
    };
    useEffect(() => {
        showLoginButton();
    }, []);
    window.addEventListener('resize', showLoginButton);

    const [showRegister, setRegisterModal] = useState(false);
    const [showLogin, setLoginModal] = useState(false);


    const showRegisterModal = () => setRegisterModal(!showRegister);
    const showLoginModal = () => setLoginModal(!showLogin);

    const logout = () => 
        myAxios.get(`logout`)
            .then((response) => {
                dispatch(logoutUser())
            })
            .catch((error) => {
                console.log(error);
            })


    return (
        <div>
            <div> 
                <Navbar bg="light" variant="light" className = "navbar">
                    <Navbar.Brand as={Link} to="/" className= "navbar-logo"
                    onClick={closeMobileMenu}> YourShelfy <i style= {{"paddingLeft":"10px"}} className="fas fa-dolly-flatbed" />
                    </Navbar.Brand>
                    <Navbar.Collapse>
                    <Nav className={click ? 'nav-menu active' : 'nav-menu'}>
                        <Nav.Link as={Link} to="/products" onClick={closeMobileMenu}
                        className='nav-links'>Products <i style= {{"paddingLeft":"5px"}} className="fas fa-boxes" /></Nav.Link>
                        <Nav.Link as={Link} to="/shoppingList" onClick={closeMobileMenu}
                        className='nav-links'>Shopping list <i style= {{"paddingLeft":"5px"}} className="fas fa-shopping-basket" /></Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={closeMobileMenu}
                        className='nav-links'>About<i style= {{"paddingLeft":"5px"}} className="fas fa-info-circle" /></Nav.Link>
                        <Nav className='nav-links-mobile'>
                            {user==null &&
                                <MyButton buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                onClick={() => {closeMobileMenu(); showLoginModal()}}
                                >
                                    LOG IN</MyButton>
                            }
                        </Nav>
                            <Nav className='nav-links-mobile'>
                            {user==null &&
                                <MyButton buttonStyle='btn--outline'
                                buttonSize='btn--large'
                                onClick={() => {closeMobileMenu(); showRegisterModal()}}
                                >
                                    REGISTER</MyButton>
                            }
                        </Nav>
                        <Nav className='nav-links-mobile'>
                            {user==null ||
                                <p className='user'>{user.email}</p>
                            }
                        </Nav>
                        <Nav className='nav-links-mobile'>
                            {user==null ||
                                <MyButton buttonStyle='btn--outline'
                                buttonSize='btn--large'
                                onClick={() => {closeMobileMenu(); logout()}}
                                >
                                    LOG OUT</MyButton>
                            }
                        </Nav>
                    </Nav>   
                    <Nav style={{marginLeft: "auto"}}>
                        {user && visLogin &&
                        <p className='user'>{user.email}</p>
                        }
                        {user==null && visLogin && <MyButton buttonStyle='btn--primary'
                        onClick={showLoginModal}>
                            LOG IN</MyButton>}
                        {user==null && visLogin && <MyButton buttonStyle='btn--outline'
                        onClick={showRegisterModal}>
                            REGISTER</MyButton>}
                        {user==null || (visLogin && <MyButton buttonStyle='btn--outline'
                        onClick={logout}>
                            LOG OUT</MyButton>)}
                    </Nav>
                    {/* <Nav>
                        <i style= {{"paddingRight":"30px"}} className="fas fa-shopping-basket" /> 
                    </Nav> */}
                    <Nav className= "menu-icon" style={{marginLeft: "auto", paddingRight: "10px"}} onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </Nav>
                    </Navbar.Collapse>
                </Navbar> 
                <RegisterModal show={showRegister} setOpen={showRegisterModal}/>
                <LoginModal show={showLogin} setOpen={showLoginModal}/>
            </div>
            <Outlet />
        </div>
    );

}

export default Navigation;

