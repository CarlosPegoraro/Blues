import { Route, Routes } from "react-router-dom";

/*Min Pages*/
import { CreatePage } from "./pages/CreatePage";
import { Home } from './pages/Home';
import { Notices } from "./pages/Notices";
import { Search } from "./pages/Search";

/*Drink Groups*/
import { Whiskeys } from "./pages/whiskeys/WhiskeysHome";

/*Drinks*/
import { Aperol } from "./pages/drinks/Aperol";
import { Negroni } from "./pages/drinks/Negroni";
import { BloodyMary } from "./pages/drinks/BloodyMary";
import { Cosmopolitan } from "./pages/drinks/Cosmopolitan";
import { Daiquiri } from "./pages/drinks/Daiquiri";
import { LongIsland } from "./pages/drinks/LongIsland";
import { Marguerita } from "./pages/drinks/Margarita";
import { Martini } from "./pages/drinks/Martini";
import { Mojito } from "./pages/drinks/Mojito";
import { Pinacolada } from "./pages/drinks/PinaColada";
import { Zombie } from "./pages/drinks/Zombie";
import { TequilaSunrise } from "./pages/drinks/TequilaSunrise";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whiskeys" element={<Whiskeys />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<CreatePage />} />
            {/*Drinks*/}
            <Route path="/drinks/aperol" element={<Aperol />} />
            <Route path="/drinks/negroni" element={<Negroni />} />
            <Route path="/drinks/bloodymary" element={<BloodyMary />} />
            <Route path="/drinks/cosmopolitan" element={<Cosmopolitan />} />
            <Route path="/drinks/daiquiri" element={<Daiquiri />} />
            <Route path="/drinks/longisland" element={<LongIsland />} />
            <Route path="/drinks/marguerita" element={<Marguerita />} />
            <Route path="/drinks/martini" element={<Martini />} />
            <Route path="/drinks/mojito" element={<Mojito />} />
            <Route path="/drinks/pinacolada" element={<Pinacolada />} />
            <Route path="/drinks/zombie" element={<Zombie />} />
            <Route path="/drinks/tequilasunrise" element={<TequilaSunrise />} />

        </Routes>
    )
}