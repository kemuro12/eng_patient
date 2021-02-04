import React, { useState } from 'react';
import ForgotForm from './forms/ForgotForm';
import SignInForm from './forms/SignInForm';
import SignUpForm from './forms/SignUpForm';

import styled from 'styled-components';

const ContainerDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
`

const LoginPage = props => {
    const [currentForm, setCurrentForm] = useState(props.currentForm || 'signin');
    
    return (
        <ContainerDiv>
            {
                currentForm === 'signin' ? <SignInForm onCurrentFormChange={formType => setCurrentForm(formType) }/>
                : currentForm === 'signup' ? <SignUpForm onCurrentFormChange={formType => setCurrentForm(formType) } />
                : currentForm === 'forgot' ? <ForgotForm onCurrentFormChange={formType => setCurrentForm(formType) } /> 
                : <SignInForm onCurrentFormChange={formType => setCurrentForm(formType) }/>
            }
        </ContainerDiv>
    )
}

export default LoginPage;