import './App.css';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './redux/user-reducer';
import Preloader from './components/templates/Preloader';
import { initializeApp } from './redux/app-reducer';
import RouterController from './components/RouterController';

const ContainerDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background: rgb(24, 25, 35);
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
`
const LeftImg = styled.img`
    position: fixed;
    left: 0px;
    bottom: 0px;
    top: 0px;
`
const RightImg = styled.img`
    position: fixed;
    right: 0px;
    bottom: 0px;
    top: 0px;
`

function App() {
    const isInitialized = useSelector(state => state.app.isInitialized)
    const dispatch = useDispatch();

    useEffect(() => (async () => {
        if(window.localStorage.getItem('token')) await dispatch(getUser())
            
        dispatch(initializeApp());
    })()
    , [])

    return (
        <ContainerDiv>
            <LeftImg src="https://my.subtitles.love/static/media/login_scr_left.6cb41681.svg" />
            <RightImg src="https://my.subtitles.love/static/media/login_scr_right.745716da.svg" />
            
            {!isInitialized ? <Preloader /> : <RouterController /> }

        </ContainerDiv>
    );
}

export default App;
