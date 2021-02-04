import './App.css';

import styled from 'styled-components';
import { Route } from 'react-router-dom';
import UserInfo from './components/UserInfo';
import LoginPage from './components/LoginPage';
import { useSelector } from 'react-redux';

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
    const user = useSelector(state => state.user.user);

    

    return (
        <ContainerDiv>
            <LeftImg src="https://my.subtitles.love/static/media/login_scr_left.6cb41681.svg" />
            <RightImg src="https://my.subtitles.love/static/media/login_scr_right.745716da.svg" />

            <Route exact path="/" render={() => <LoginPage currentForm="signin" />} />
            <Route exact path="/user" render={() => user ? <UserInfo /> : <LoginPage currentForm="signin" />} />
        </ContainerDiv>
    );
}

export default App;
