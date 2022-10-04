import React from 'react';
import * as E from './NavbarElements';

export const Navbar = () => {
  return (
    <>
      <E.Nav>
        <E.Bars />
        <E.NavMenu>
          <E.NavLink to="/" end>
            Home
          </E.NavLink>
          <E.NavLink to="/account">Account</E.NavLink>
          <E.NavLink to="/history">History</E.NavLink>
          <E.NavLink to="/payments">Payments</E.NavLink>
          <E.NavLink to="/reservation">Reservation</E.NavLink>
          <E.NavLink to="/subscription">Subscription</E.NavLink>
        </E.NavMenu>
        <E.NavBtn>
          <E.NavBtnLink to="/login">Log In</E.NavBtnLink>
        </E.NavBtn>
        <E.NavBtn>
          <E.NavBtnLink to="/signup">Sign Up</E.NavBtnLink>
        </E.NavBtn>
      </E.Nav>
    </>
  );
};
