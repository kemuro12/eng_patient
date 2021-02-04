import React, { useState } from 'react';
import Input from '../templates/Input';
import Button from '../templates/Button';

import styled from 'styled-components';


const MainDiv = styled.div`
    padding: 35px 47px;
    max-width:420px;
    width:100%;
    @media screen and (max-width: 580px){
        width:auto;
    }
    height:auto;
    margin:0 auto;
    color:white;
    background: rgb(23, 24, 34);
    border:2px solid rgb(255, 255, 255, 0.03);
    border-radius:12px;
    z-index:100;
    h2{
        text-align:center;
    }
`

const StyledForm = styled.form`
    p{
        font-size:16px;
        color:rgb(123,127,158);
        margin:14px 0;
    }
`
const SignUpP = styled.span`
    display:block;
    margin-top:20px;
    color: white;
    text-align: center;
    font-weight: 100;
    font-size: 16px;
    letter-spacing:0.3px;
    span{
        font-weight:bold;
        :hover{
            opacity: 0.75;
            cursor:pointer;
        }
    }
`

const ForgotForm = props => {
    const [email, setEmail] = useState('');

    return (
        <MainDiv>
            <h2>Recover password</h2>
            <StyledForm>
                <p>Email</p>
                <Input placeholder="Your E-Mail" value={email} onChange={e => setEmail(e.target.value)} type="email"></Input>
                <Button variant="danger">Recover</Button>
            </StyledForm>
            <SignUpP><span onClick={() => props.onCurrentFormChange('signin')}>Back</span></SignUpP>
        </MainDiv>
    )
}

export default ForgotForm;