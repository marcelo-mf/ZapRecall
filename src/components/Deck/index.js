import Flashcard from "../Flashcard";
import MiniLogo from "../../assets/logo-mini.png"
import "./style.css"
import { useState } from "react/cjs/react.development";

function Deck({setPagina}) {

    const [deck, setDeck] = useState([
        
        {
            title: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
            status: "not answered"
        },
        {
            title: "O React é _______",
            answer: "uma biblioteca JavaScript para a construção de interfaces",
            status: "not answered"
        },
        {
            title: "Componentes devem iniciar com ______",
            answer: "letra maiúscula",
            status: "not answered"
        },
        {
            title: "Podemos colocar ___ dentro do JSX",
            answer: "expressões",
            status: "not answered"
        },
        {
            title: "O ReactDOM nos ajuda __________",
            answer: "interagindo com o DOM para colocar componentes React na mesma",
            status: "not answered"
        },
        {
            title: "Usamos o npm para ______",
            answer: "gerenciar pacotes necessários e suas dependências",
            status: "not answered"
        },
        {
            title: "Usamos props para ________",
            answer: "passar diferentes informações para componentes",
            status: "not answered"
        },
        {
            title: "Usamos estado (state) para ______",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            status: "not answered"
        }
    
    ])

    const [currentPosition, setCurrentPosition] = useState(0)

    function goNext() {
        let nextPosition = currentPosition + 1;

        if(nextPosition === deck.length) {
            const incorrectCard = deck.find(card => card.status === "nao-lembrei");

            if(incorrectCard) {
                setPagina("fracasso")
            } else {
                setPagina("success")
            }

            return;
        }
        
        setCurrentPosition(nextPosition);
    }

    function updateDeck(flashcard, status) {
        const newDeck = [...deck]

        newDeck[flashcard].status = status;

        setDeck(newDeck)
    }

    const deckJSX = deck.map(card => (
        <Flashcard 
            key ={card.title}
            currentPosition={currentPosition + 1} 
            deckSize={deck.length} 
            title={card.title} 
            answer={card.answer}
            goNext={goNext}
            updateDeck={updateDeck}
        />
    ));

    return (
        <div>
            <img src={MiniLogo} alt="Logo"/>
            {deckJSX[currentPosition]}
        </div>
    );
}

export default Deck;