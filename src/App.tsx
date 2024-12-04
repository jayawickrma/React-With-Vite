import './App.css'
import {ChangeEvent, useState} from "react";








function App() {
   const  [firstName,setFirstName]=useState("")
    const [address,setAddress]=useState("")

    const [customer,setCustomer]=useState({
        firstName:"",
        address:""
    })
    function handleOnChange(){
        setCustomer({
            ...customer,
            firstName: firstName,
            address: address
        })
    }
    return(
        <>
            <input name={'firstName'} type={"text"} placeholder={"First name"}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}/>
            <input name={'address'} type={"text"} placeholder={"Last name"}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}/>
            <button onClick={handleOnChange}>Submit</button> <br/>
            {'Hello ' +firstName +" From " + address}
        </>
    )

}

export default App;
