export default function ({children, isSelected, ...props}) {
    function handleClick(){
        console.log("Hello, world!");
    }

    console.log("TAB_BUTTON COMPONENT EXECUTING")


    return (
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
        </li>
    );
}