import Signin from "./components/Signin"
import Signup from "./components/Signup"

import style from "./components/sign.module.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App =()=>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Signin/>} path="/"/>
                    <Route element={<Signup/>} path="/signup"/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App