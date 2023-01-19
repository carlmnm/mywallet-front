import styled from "styled-components"

export default function RegisterForm() {
    return (
        <ContainerForm>
            <form /*onSubmit={signUp}*/>
                <Input
                    type="text"
                    placeholder="Nome"
                    //value={name}
                    //onChange={e => setName(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="CPF"
                    //value={cpf}
                    //onChange={e => setCpf(e.target.value)}
                    required
                />
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
                <ButtonSignUp type="submit">
                    <p>{"Cadastrar"}</p>
                </ButtonSignUp>
            </form>
        </ContainerForm>
    )
}

{/*styled components*/}

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