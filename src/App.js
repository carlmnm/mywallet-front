import Login from "./components/Login"
import Context from "./components/Context"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from "./components/GlobalStyle"
import SignUp from "./components/SignUp"

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
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}
