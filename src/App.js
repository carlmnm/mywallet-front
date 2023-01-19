import Login from "./components/Login"
import Context from "./components/Context"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./components/GlobalStyle"
import SignUp from "./components/SignUp"
import HomePage from "./components/UserHome"
import NewEntry from "./components/NewEntry"
import NewOutput from "./components/NewOutput"

export default function App() {
    return (
        <Context.Provider value={{
        }}
        >
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<SignUp />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/nova-entrada" element={<NewEntry />} />
                    <Route path="/nova-saida" element={<NewOutput />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}
