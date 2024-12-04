export default function Subject(props:{subject:string,para:string}){
    return(
        <>
        <h1>{props.subject}</h1>
            <h3>{props.para}</h3>
        </>
    )
}