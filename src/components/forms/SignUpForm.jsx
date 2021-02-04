import React, { useState } from 'react';
import Input from '../templates/Input';
import Button from '../templates/Button';

import styled from 'styled-components';
import ButtonWithIcon from '../templates/ButtonWithIcon';


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
const PrivacySpan = styled.span`
    display:block;
    width: 100%;
    text-align: center;
    color: rgb(255, 252, 252);
    opacity: 0.75;
    font-size: 12px;
    margin-bottom: 15px;
    margin-top: 15px;
    span{
        color: rgb(1, 163, 171);
        cursor:pointer;
        text-decoration:underline
    }
`
const Row = styled.div`
    margin-top:50px;
    display:flex;
    justify-content:space-between;
    padding-bottom:10px;
    gap:20px;
`

const LineDiv = styled.div`
    width:100%;
    border-top:1px solid rgb(84, 84, 84);;
    margin:20px 0;
    border-radius:3px;
    display:flex;
    justify-content:center;
    span{
        background:rgb(23, 24, 34);
        text-align:center;
        font-size:15px;
        width:40px;
        margin-top:-9px;
        color:rgb(84, 84, 84);
    }
`

const SignUpForm = props => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    return (
        <MainDiv>
            <h2>Sign Up</h2>

            <Row>
                <ButtonWithIcon iconUrl="https://my.subtitles.love/static/media/bt_icon_face.8550be43.svg">Continue with Facebook</ButtonWithIcon>
                <ButtonWithIcon iconUrl="https://my.subtitles.love/static/media/bt_icon_google.a677a569.svg">Continue with Google</ButtonWithIcon>
            </Row>

            <LineDiv>
                <span>or</span>
            </LineDiv>

            <StyledForm>
                <p>Email</p>
                <Input value={email} onChange={e => setEmail(e.target.value)} type="email"></Input>
                <p>Password</p>
                <Input value={pass} onChange={e => setPass(e.target.value)} type="password" placeholder="7 or more symbols"></Input> 
                <p>Confirm password</p>
                <Input value={confirmPass} onChange={e => setConfirmPass(e.target.value)} type="password" placeholder="7 or more symbols"></Input> 
                <PrivacySpan>By submitting this form I agree to the <span>Privacy Policy</span></PrivacySpan>
                <Button>Get started!</Button>
            </StyledForm>
            <SignUpP>have an account? <span onClick={() => props.onCurrentFormChange('signin')}>Sign In</span></SignUpP>
        </MainDiv>
    )
}

export default SignUpForm;