import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 8px 10px;
    outline:none;
    background:transparent;
    color: rgb(255, 255, 255);
    font-size: 13px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 5px;
    position: relative;
    display:flex;
    align-items:center;
    flex: 1 1 0%;
    justify-content:space-between;
    :hover{
        background-color: rgba(255, 255, 255, 0.15);
        cursor: pointer;
        transition: all 0.25s ease 0s;
    }
`

const Icon = styled.img`
    height: 20px;
    width: 20px;
`

const ButtonWithIcon = props => {
    return (
        <StyledButton { ...props }>
            <span>{props.children}</span>
            <Icon src={props.iconUrl}/>
        </StyledButton>
    )
}

export default ButtonWithIcon;