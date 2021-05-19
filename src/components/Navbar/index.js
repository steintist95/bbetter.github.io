import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
   return (
        <>
            <Nav>
                <Bars />
                    <NavMenu>
                        <NavLink to='/about' activeStyle>
                            About
                        </NavLink>
                        <NavLink to='/pictures' activeStyle>
                            Pictures
                        </NavLink>
                        <NavLink to='/store' activeStyle>
                            Store
                        </NavLink>
                        <NavLink to='/sign-up' activeStyle>
                            Sign Up
                        </NavLink>
                        <NavLink to='/schedule' activeStyle>
                            Schedule
                        </NavLink>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
            </Nav>
            </>
    );
};

export default Navbar;