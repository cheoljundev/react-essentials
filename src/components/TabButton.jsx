export default function ({children, onSelect, isSelected}) {
    function handleClick(){
        console.log("Hello, world!");
    }

    console.log("TAB_BUTTON COMPONENT EXECUTING")


    return (
        <li>
            <button className={isSelected ? "active" : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}