import React, { useState } from 'react';
import Input from '../templates/Input';
import Button from '../templates/Button';
import ButtonWithIcon from '../templates/ButtonWithIcon';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { useHistory } from 'react-router-dom';
import Preloader from '../templates/Preloader';

const MainDiv = styled.div`
    position:relative;
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
const ForgotSpan = styled.span`
    color:rgb(0, 163, 171);
    text-align:right;
    display:block;
    margin:6px 0px;
    :hover{
        opacity:0.9;
        cursor:pointer;
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

const ErrorMessageSpan = styled.span`
    display:block;
    text-align:center;
    color:red;
    font-size:16px;
`
const ModalDiv = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    z-index:120;
    background:rgb(0,0,0,0.5);
    border-raduis:12px;
`

const SignInForm = props => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const isFetching = useSelector(state => state.auth.isFetching);
    const errorMessage = useSelector(state => state.auth.errorMessage);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await dispatch(login(email, pass));
        if(response) history.push("/");
        else setPass("");
    }

    return (
        <MainDiv>
            { isFetching ? 
                <ModalDiv>
                    <Preloader />
                </ModalDiv> 
            : ""}
            
            <h2>Sign In</h2>
            <Row>
                <ButtonWithIcon iconUrl="https://my.subtitles.love/static/media/bt_icon_face.8550be43.svg">Continue with Facebook</ButtonWithIcon>
                <ButtonWithIcon iconUrl="https://my.subtitles.love/static/media/bt_icon_google.a677a569.svg">Continue with Google</ButtonWithIcon>
            </Row>

            <LineDiv>
                <span>or</span>
            </LineDiv>

            <StyledForm onSubmit={ handleSubmit }>
                <p>Email</p>
                <Input required value={email} onChange={e => setEmail(e.target.value)} type="email"></Input>
                <p>Password</p>
                <Input required value={pass} onChange={e => setPass(e.target.value)} type="password"></Input> 
                <ForgotSpan onClick={() => props.onCurrentFormChange('forgot')}>Forgot password</ForgotSpan>

                <ErrorMessageSpan>
                    { errorMessage.length ? errorMessage : "" }
                </ErrorMessageSpan>

                <Button type="submit">
                    Login
                </Button>
            </StyledForm>
            <SignUpP onClick={() => props.onCurrentFormChange('signup')}>Don't have an account? <span>Sign Up</span></SignUpP>
        </MainDiv>
    )
}

export default SignInForm;