import styled from "styled-components"
import RegisterForm from "./SignUpForm"
import { Link } from "react-router-dom"

export default function UserSignup() {
    return (
        <Container>
            <Logo>{"MyWallet"}</Logo>
            <RegisterForm/>
            <Link to={`/`} style={{textDecoration: 'none'}}>
                <h1>
                    {"Já tem uma conta? Entre agora!"}
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
margin-bottom: 28px;
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