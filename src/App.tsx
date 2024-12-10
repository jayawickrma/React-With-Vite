import './App.css'
import {ChangeEvent} from "react";
import {useState} from "react";
import {Customer} from "./Model/Customer.ts";



function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [num, setPhone] = useState("");

    const [customers, setCustomers] = useState<Customer[]>([])

    function addCustomer() {
        const customer_1=new Customer(name, email, num);
        setCustomers(customers=> [...customers,customer_1])
    }
    function deleteCustomer(){
        setCustomers(customers=>customers.slice(0,-1))
    }
    function deleteByEmail(){
        setCustomers((customers=>customers.filter(customer=>customer.email != email)))
    }
    function updateCustomer() {
        setCustomers((customers =>
            customers.map((customer) =>
                customer.email === email
                    ? new Customer(name || customer.name, customer.email, customer.phone)
                    : customer
            )
        ));
    }



    return (
        <>
            <input name={'firstName'} type={"text"} placeholder={"First name"}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
            <input name={'email'} type={"email"} placeholder={"Email"}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
            <input name={'phone'} type={"tel"} placeholder={"Mobile Number"}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}/> <br/><br/>
            <button onClick={addCustomer}>Add Customer</button>
            <button onClick={deleteCustomer}>Delete Customer</button>
            <button onClick={deleteByEmail}>Delete by Email</button>
            <button onClick={updateCustomer}>Update Customer</button> <br/><br/>

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