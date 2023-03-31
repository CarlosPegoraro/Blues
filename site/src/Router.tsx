import { Route, Routes } from "react-router-dom";
import { CreatePage } from "./pages/CreatePage";
import { Home } from './pages/Home';
import { Notices } from "./pages/Notices";
import { Search } from "./pages/Search";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<CreatePage />} />
        </Routes>
    )
}