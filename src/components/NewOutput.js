import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function AddNewEntry() {
    const navigate = useNavigate()

    function saveOutput(){
        navigate("/home")
    }

    return (
        <Container>
            <Head>
                <p>
                    {"Nova saída"}
                </p>
            </Head>
            <ContainerForm>
                <form onSubmit={saveOutput}>
                    <Input
                        type="number"
                        placeholder="Valor"
                        //value={email}
                        //onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Descrição"
                        //value={password}
                        //onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <ButtonAdd type="submit">
                        <p>{"Salvar Saída"}</p>
                    </ButtonAdd>
                </form>
            </ContainerForm>
        </Container>
    )
}

{/*styled components*/ }

const ButtonAdd = styled.button`
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

const ContainerForm = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 299px;
`

const Head = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
position: absolute;
top: 3vh;
left: 3vw;
//background-color: red;
p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
}
`

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #8C11BE;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
position: relative;
`