import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function RegisterForm() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function signUp(e) {
        e.preventDefault()
        const URL = "http://localhost:5001/signup"
        const body = { name, email, password, confirmPassword }

        const promise = axios.post(URL, body)
        promise.then(res => {
            console.log("deu certo")
            alert("Usuário cadastrado com sucesso")
            navigate('/')
        })
        promise.catch((err) => {
            console.log("oxe deu errado")
        })
    }
    return (
        < ContainerForm >
            <form onSubmit={signUp}>
                <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Confirme sua senha"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                />
                <ButtonSignUp type="submit">
                    <p>{"Cadastrar"}</p>
                </ButtonSignUp>
            </form>
        </ContainerForm >
    )
}

{/*styled components*/ }

const ContainerForm = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 299px;
`

const Input = styled.input`
width: 326px;
height: 58px;
background: #FFFFFF;
border-radius: 5px;
padding-left: 15px;
margin-bottom: 13px;
border: none;
::placeholder{
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #000000;
}
`

const ButtonSignUp = styled.button`
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
color: #FFFFFF;
}
`