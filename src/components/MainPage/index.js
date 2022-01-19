import Logo from "../../assets/logo.png";
import "./style.css";

export default function MainPage(props) {
    return (
        <div className="main-container">
            <img className="logo" src={Logo} alt="ZapRecall" />
            <button onClick={() => props.mudarPagina('deck')}>Praticar React</button>
        </div>
    )
}
