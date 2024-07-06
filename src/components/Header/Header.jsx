import reactImg from "../../assets/react-core-concepts.png";
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import './Header.css';

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function (){
    const description = reactDescriptions[genRandomInt(reactDescriptions.length)];

    return (<header>
        <img src={reactImg} alt="Stylized atom"/>
        <h1>React Essential</h1>
        <p>
            {description} React concepts you will need for almost any app you are
            going to build!
        </p>
    </header>);
}