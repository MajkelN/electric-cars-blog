import React from 'react';
import { NavLink } from "react-router-dom";

import {HeaderWrapper, NavWrapper, List} from './Navigation.css'
import {H1} from './SubComponents/H1/H1.css'
import {LinkStyle} from './SubComponents/Link/Link.css'

const Navigation = () => {
    return (  
        <HeaderWrapper>
            <H1>Electric cars - blog</H1>
            <NavWrapper>
                <List>
                    <li>
                        <NavLink  to="/"><LinkStyle>Home</LinkStyle></NavLink>
                    </li>
                    <li>
                        <NavLink  to="/blogs"><LinkStyle>Blog</LinkStyle></NavLink>
                    </li>
                    <li>
                        <NavLink  to="/singIn"><LinkStyle>Sign in</LinkStyle></NavLink>
                    </li>
                </List>
            </NavWrapper>
        </HeaderWrapper>
    );
}
 
export default Navigation;