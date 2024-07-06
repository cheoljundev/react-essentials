export default function (props) {
    function handleClick(){
        console.log("Hello, world!");
    }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    );
}