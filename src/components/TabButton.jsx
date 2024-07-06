export default function ({children, onSelect}) {
    function handleClick(){
        console.log("Hello, world!");
    }

    console.log("TAB_BUTTON COMPONENT EXECUTING")


    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}