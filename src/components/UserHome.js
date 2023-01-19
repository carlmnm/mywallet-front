import styled from "styled-components"
import arrow from "../assets/imgs/arrow.svg"
import novaentrada from "../assets/imgs/novaentrada.svg"
import novasaida from "../assets/imgs/novasaida.svg"
import { useNavigate } from "react-router-dom"

export default function HomePage() {
    const navigate = useNavigate()

    function addEntrada () {
        navigate("/nova-entrada")
    }
    function addSaida () {
        navigate("/nova-saida")
    }
    return (
        <Container>
            <Head>
                <h1>{"Olá, Fulano"}</h1>
                <img src={arrow} />
            </Head>
            <Body>
                <p>
                    {"Não há registros de entrada ou saída"}
                </p>
            </Body>
            <Footer>
                <AddButton onClick={addEntrada}>
                    <img src={novaentrada} />
                    <p>
                        {'Nova entrada'}
                    </p>
                </AddButton>

                <AddButton onClick={addSaida}>
                    <img src={novasaida} />
                    <p>{"Nova saída"}</p>
                </AddButton>
            </Footer>
        </Container>
    )
}

{/*styled components*/ }

const AddButton = styled.button`
width: 155px;
height: 114px;
background: #a328d6;
border-radius: 5px;
border: none;
position: relative; 
{cursor: pointer;}
img{
    position: absolute;
    top: 11px;
    left: 10px;
}
p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    width: 64px;
    text-align: left;
    margin-top: 50px;
    margin-left: 10px;
}
`

const Footer = styled.div`
display: flex;
justify-content: space-between;
width: 325px;
//margin-bottom: 20px;
`

const Body = styled.div`
width: 326px;
height: 446px;
background: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
//margin-top: 80px;
p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #868686;
    width: 180px;
    text-align: center;
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

const Head = styled.div`
width: 95%;
display: flex;
justify-content: space-between;
//position: absolute;
//margin-top: 25px;
h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #FFFFFF;
}
img {
    width: 23px;
    height: 24px;
    {cursor: pointer;}
}
`
