export default function ButtonComponent(props){
    const name=props.name
        return(
           <button onClick={()=>(props.onClick(name))}>{props.name}</button>
        )
}

export  function SmallButton(){
    return(
        <button style={{ backgroundColor: "blue", color: "white" }}>Click Me</button>
    )
}
export function CountButtonClickedTotals(props) {


    return (
    <div>
        <button onClick={()=>{props.onClick(props.value)}}>Count+{props.value}</button>
    </div>
    );
}