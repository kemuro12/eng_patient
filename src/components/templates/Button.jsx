import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
    outline:none;
    border:none;
    width:100%;
    height: 50px;
    margin-top:8px;
    background: ${props => props.variant === 'danger' ? 'rgb(234, 82, 61);' : 'rgb(255, 172, 48);'} ;
    border-radius: 6px;
    cursor: pointer;
    opacity: 1;
    color: white;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    :hover{
        opacity:0.8;
    }
`

const Button = props => {
    return (
        <StyledButton { ...props }>
            {props.children}
        </StyledButton>
    )
}

export default Button;