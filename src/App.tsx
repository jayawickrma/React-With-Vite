import './App.css'
import {ChangeEvent, useState} from "react";








function App() {
    const [customer,setCustomer]=useState({
        firstName: "",
        address: ""
    })
    function handleOnChange(event:ChangeEvent<HTMLInputElement>){
        setCustomer({
            ...customer,
         [event.target.name]:event.target.value
        })
    }
    return(
        <>
            <input name="firstName" type="text" placeholder="Name" onChange={handleOnChange}/>
            <input type="text" name="address" placeholder="address" onChange={handleOnChange}/>

                <button>Submit</button> <br/>
                {'hello  : ' +customer.firstName + ' From '  + customer.address}

        </>
    )

}

export default App;
