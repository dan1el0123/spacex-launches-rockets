import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Rockets from "./pages/Rockets/Rockets";
import SingleRocket from "./pages/SingleRocket/SingleRocket";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="rockets">
                    <Route index element={<Rockets />} />
                    <Route path=":rocketId" element={<SingleRocket />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}

export default App;
