import styled from "styled-components"
import UserLogin from "./LoginForm"
import { Link } from "react-router-dom"

export default function MakeLogin() {
    return (
        <Container>
            <Logo><p>MyWallet</p></Logo>
            <UserLogin />
            <Link to={`/cadastro`} style={{textDecoration: 'none'}}>
                <h1>
                    {"Primeira vez? Cadastre-se!"}
                </h1>
            </Link>
        </Container>
    )
}

{/*styled components*/ }

const Logo = styled.div`
font-family: 'Saira Stencil One';
font-style: normal;
font-weight: 400;
font-size: 32px;
color: #FFFFFF;
margin-bottom: 24px;
`

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #8C11BE;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
    margin-top: 36px;   
}
`
