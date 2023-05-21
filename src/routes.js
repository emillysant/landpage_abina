import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainPage from "./pages/main/MainPage";
import ClientPage from './pages/client/ClientPage';


function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
                <Route path="/clientes" element={<ClientPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;