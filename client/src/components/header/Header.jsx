import React from "react";
import {
  AppBar,
  Toolbar,
  styled
} from "@mui/material";

import LOGO from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Container = styled(Toolbar)`
    justify-contect: center;
    & > a {
        padding: 1rem;
        color: #fff;
        text-decoration: none;
        @media (max-width: 600px) {
            font-size: .8rem;
            }
    };
    & > a:hover {
        color: #a1d1dd;
        font-weight: bold;
    };

`;

const Component = styled(AppBar)`
    background-color: #de6811;
`;

const Header = () => {
  return (
    <Component position="sticky">
        <Container>
            <img src={LOGO} alt="DiarySpace" style={{width: "12rem"}}/>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/login'>LOGOUT</Link>
        </Container>
    </Component>
  );
};

export default Header;
