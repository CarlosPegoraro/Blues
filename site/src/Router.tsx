import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { Information } from "./pages/Information";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informations" element={<Information />} />
        </Routes>
    )
}