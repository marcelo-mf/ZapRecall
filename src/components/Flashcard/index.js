import Seta from "../../assets/turn.png";
import "./style.css";
import { useState } from "react";

function Footer( {answerCard, isAnswered, goNext} ) {
    if(isAnswered) {
        return <img src={Seta} alt="Virar flashcard" onClick={goNext}/>
    }
    
    return(
        <>
            <button onClick={() => answerCard("aprendi-agr")}>Aprendi agora</button>
            <button onClick={() => answerCard("nao-lembrei")}>Não Lembrei</button>
            <button onClick={() => answerCard("lembrei-com-esforco")}>Lembrei com esforço</button>
            <button onClick={() => answerCard("zap")}>Zap!</button>
        </>
    )
}

export default function Flashcard({currentPosition, deckSize, title, answer, goNext, updateDeck}) {

    const [isFlipped, setIsFlipped] = useState(true);
    const [status, setStatus] = useState('neutral')
    const [isAnswered, setIsAnswered] =  useState(false)

    function answerCard(status) {
        setStatus(status)
        setIsAnswered(true)
        updateDeck(currentPosition - 1, status)
    }

    return (
        <div className="container">
            <div className={`flashcard ${status}`}>
                {isFlipped 
                ? (
                    <>
                        <span className="position">{currentPosition}/{deckSize}</span>
                        <div className="pergunta"><h2>{title}</h2></div>
                        <img src={Seta} alt="Virar flashcard" onClick={() => setIsFlipped(false)}/>
                    </>
                    ) : (
                    <>
                        <div className="header">
                            <span className="title">{title}</span>
                            <span className="position">{currentPosition}/{deckSize}</span>
                        </div>
                        <div className="pergunta"><p>{answer}</p></div>
                        <div className="action-container">
                            <Footer answerCard={answerCard} isAnswered={isAnswered} goNext={goNext}/>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}