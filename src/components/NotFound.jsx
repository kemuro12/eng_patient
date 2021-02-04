import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundDiv = styled.div`
    color:white;
    font-size:32px;
    letter-spacing:2px;
    text-align:center
`

const NotFound = props => {
    const location = useLocation().pathname;

    return (
        <NotFoundDiv>
            <b>{ location }</b> is Not Found 404
            <p>
                go to <NavLink to="/">/</NavLink>  
            </p>
        </NotFoundDiv>
    )
}

export default NotFound;