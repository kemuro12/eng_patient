import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import logout_icon from '../images/logout.png';
import { logout } from '../redux/auth-reducer';

const ContainerDiv = styled.div`
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

const Row = styled.div`
    display:flex;
`

const InfoDiv = styled.div`
    margin-left:30px;
    font-size:18px;
    p{
        margin:5px 0px;
    }
`

const IconDiv = styled.div`
    border-radius:50%;
    position:absolute;
    top:12px;
    right:18px;
    padding:20px;
    transition:background 0.1s linear;
    :hover{
        background:rgb(249,7,7,0.2);
        cursor:pointer;
    }
    img{
        position:absolute;
        top:7px;
        left:5px;   
    }
`

const UserInfo = props => {
    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    const onLogoutClick = () => {
        dispatch(logout())
    }

    return (
        <ContainerDiv>
            <IconDiv onClick={ onLogoutClick }>
                <img width="24" src={ logout_icon } alt="logout"/>
            </IconDiv>
            <Row>
                <img alt="avatar" width="140" src="https://www.englishpatient.org/english-patient-files/acc8cfe3-58d0-4cab-bba7-6a61747c0456.jpg"/>
                <InfoDiv>
                    <div>{user.firstName + " " + user.lastName}</div>
                    <p>Телефон: {user.phone}</p>
                    <p>Skype: {user.skype}</p><br/>
                    <p>{user.stasiNote}</p>
                </InfoDiv>
            </Row>
        </ContainerDiv>
    )
}

export default UserInfo;