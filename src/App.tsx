import './App.css'
import {ChangeEvent} from "react";
import {useState} from "react";
import {Customer} from "./Model/Customer.ts";



function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");

    const [customers, setCustomers] = useState<Customer[]>([])

    function addCustomer() {
        const customer_1=new Customer(name, email, num);
        setCustomers(customers=> [...customers,customer_1])
    }
    function deleteCustomer(){
        setCustomers(customers=>customers.slice(0,-1))
    }

    return (


        <>
            <input name={'firstName'} type={"text"} placeholder={"First name"}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
            <input name={'email'} type={"email"} placeholder={"Email"}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
            <input name={'num'} type={"email"} placeholder={"num"}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setNum(e.target.value)}/>
            <button onClick={addCustomer}>Submit</button>
            <button onClick={deleteCustomer}>Delete Customer</button>
            <br/>
            { customers.map((customer) => (

                <div key={customer.email}>
                    {customer.name +" "+customer.phone +" "+customer.email}
                </div>

            ))}
        </>


    )
}

export default App