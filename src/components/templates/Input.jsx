import React from 'react';

import styled from 'styled-components';

const StyledInput = styled.input`
    font-size:17px;
    padding-left:25px;
    color:white;
    border-radius:6px;
    box-sizing:border-box;
    border:2px solid rgb(41,43,53);
    background:rgb(33,35,48);
    height:50px;
    width:100%;
    font-weight:bold;
    :focus{
        outline:none;
    }
`

const Input = props => {
    return (
        <StyledInput { ...props } />
    )
}

export default Input;