import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"

export default function UserLogin() {
    const navigate = useNavigate()
    
    function login(e) {
        e.preventDefault()
        navigate('/home')
    }
    return (
        <ContainerForm>
            <form onSubmit={login}>
                <Input
                    type="email"
                    placeholder="E-mail"
                    //value={email}
                    //onChange={e => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    //value={password}
                    //onChange={e => setPassword(e.target.value)}
                    required
                />
                <ButtonLogin type="submit">
                    <p>{"Entrar"}</p>
                </ButtonLogin>
            </form>
        </ContainerForm>
    )
}

{/*styled components*/ }

const ContainerForm = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 326px;
flex-direction: column;
`

const Input = styled.input`
width: 326px;
height: 58px;
background: #FFFFFF;
border-radius: 5px;
padding-left: 15px;
margin-bottom: 13px;
::placeholder{
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #000000;
}
`

const ButtonLogin = styled.button`
width: 326px;
height: 46px;
background: #A328D6;
border-radius: 5px;
border: none;
p{
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
}
`