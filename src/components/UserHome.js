import styled from "styled-components"
import arrow from "../assets/imgs/arrow.svg"
import novaentrada from "../assets/imgs/novaentrada.svg"
import novasaida from "../assets/imgs/novasaida.svg"
import { useNavigate } from "react-router-dom"
import { useState, useContext, useEffect } from "react"
import Context from "./Context";
import axios from "axios"

export default function HomePage() {
    const navigate = useNavigate()
    const [entryAndOutput, setEntryAndOutput] = useState({})
    const { token, setToken } = useContext(Context)
    const [myName, setMyName] = useState("")
    const [myHistoric, setMyHistoric] = useState([])
    /*const entrys = []
    const outputs = []
    let totalEntrys = 0
    let totalOutputs = 0
    const [sum, letSum] = useState(0)*/
    const [balance, setBalance] = useState(0)

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const signinURL = "http://localhost:5001/signin"

        const promise = axios.get(signinURL, config)
        promise.then((res) => {
            setMyName(res.data.name)
            //console.log(res.data)
        })

        const inAndOutURL = "http://localhost:5001/in-and-out"

        const historicPromise = axios.get(inAndOutURL, config)
        historicPromise.then((res) => {
            setMyHistoric(res.data)
        })

        let values = 0

        myHistoric.map((item) => {
            if (item.type === "in") {
                return values += parseInt(item.value)
            } else {
                return values -= parseInt(item.value)
            }
        })

        setBalance(values);

        //populatingArray()
        //sumingEntrysAndOutputs()
    }, [myHistoric])

    {/*function populatingArray () {
        myHistoric.forEach(item => {
            if (item.type === "in") {
                entrys.push(parseInt(item.value))
            } else {
                outputs.push(parseInt(item.value))
            }
        })
    }

    function sumingEntrysAndOutputs () {
        entrys.forEach(item => {
            totalEntrys += item
        })

        outputs.forEach(item => {
            totalOutputs += item
        })

        letSum(totalEntrys - totalOutputs)
        //console.log(totalEntrys)
        //console.log(totalOutputs)
        console.log(entrys)
        console.log(outputs)
        console.log(sum)
    }*/}

    function addEntrada() {
        navigate("/nova-entrada")
    }
    function addSaida() {
        navigate("/nova-saida")
    }
    return (
        <Container>
            <Head>
                <h1>{`Olá, ${myName}`}</h1>
                <img src={arrow} />
            </Head>
            <Body>
                {myHistoric.length ?
                    <ContainerHistoric>
                        {myHistoric.map((item) => (
                            <HistoricOneLine>
                                <h1>{`${item.day}/${item.month}`}</h1>
                                <h2>{item.description}</h2>
                                <h3 className={item.type === "in" ? "in" : "out"}>{item.value}</h3>
                            </HistoricOneLine>
                        ))}
                    </ContainerHistoric>
                    : <p> {"Não há registros de entrada ou saída"} </p>
                }
                <Balance>
                    <h5>{"SALDO"}</h5>
                    <h4 className={balance >= 0 ? "in" : "out"}>{balance}</h4>

                </Balance>

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

const Balance = styled.div`
position: absolute;
bottom: 15px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 10px;
padding-right: 10px;
h5{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #000000;
}
h4{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    text-align: right;
}
.in{
    color: #03AC00;
}
.out{
    color: #C70000;
}
`

const HistoricOneLine = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
//flex-wrap: wrap;
//background-color: red;
margin-bottom: 10px;
h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #C6C6C6;
    //text-align: left;
    //background-color: blue;
}
h2{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    text-align: left;
    width: 100%;
    margin-left: 25px;
    //background-color: red;
}
h3{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: right;
    //background-color: green;
}
.in{
    color: #03AC00;
}
.out{
    color: #C70000;
}
`

const ContainerHistoric = styled.div`
display: flex;
flex-direction: column;
width: 306px;
justify-content: flex-start;
//background-color: blue;
margin-top: 20px;
`

const AddButton = styled.button`
width: 155px;
height: 114px;
background: #a328d6;
border-radius: 5px;
border: none;
position: relative; 
cursor: pointer;
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
align-items: flex-start;
position: relative;
//margin-top: 10px;
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
    cursor: pointer;
}
`