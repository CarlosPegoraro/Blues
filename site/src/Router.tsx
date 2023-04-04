import { Route, Routes } from "react-router-dom";
import { CreatePage } from "./pages/CreatePage";
import { AperolPage } from "./pages/drinks/Aperol";
import { Home } from './pages/Home';
import { Notices } from "./pages/Notices";
import { Search } from "./pages/Search";
import { Whiskeys } from "./pages/whiskeys/WhiskeysHome";
import { NegroniPage } from "./pages/drinks/Negroni";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whiskeys" element={<Whiskeys />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<CreatePage />} />
            /*Drinks*/
            <Route path="/drinks/aperol" element={<AperolPage />} />
            <Route path="/drinks/negroni" element={<NegroniPage />} />

        </Routes>
    )
}