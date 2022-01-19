import MainPage from "./components/MainPage";
import Deck from "./components/Deck";
import SuccessPage from "./components/SuccessPage";
import { useState } from "react";

function App() {

    const[pagina, setPagina] = useState('main');

    return(
        <>
            {pagina === 'main' ? <MainPage  mudarPagina={setPagina}/>: ''}
            {pagina === 'deck' && <Deck setPagina={setPagina}/>}
            {pagina === 'success' ? <SuccessPage voltarInicio={setPagina}/> : ''}
        </>
    );
}

export default App;