import './App.css'
import Subject from "./Components/SubjectComponent.tsx";
import ButtonComponent, {CountButtonClickedTotals} from "./Components/Button.tsx";
import {useState} from "react";







function App() {

    // const [content,setContent]=useState("Default values");
    //
    //
    //
    //
    //
    // function handleClick(type:string){
    //     console.log(type+'click');
    //     alert((type+' clicked'));
    //     setContent(type);
    // }


    const [count,setCount] =useState<number>(0)
    function ClickedButton(type:number){
        setCount(count+1)
    }
    return(
        <>
        <CountButtonClickedTotals onClick={ClickedButton} value={count}></CountButtonClickedTotals>
            {/*<ButtonComponent name='Add Customer' onClick={handleClick}>Add Customer</ButtonComponent>*/}
            {/*<ButtonComponent name='Delete Customer' onClick={handleClick}>Delete Customer</ButtonComponent> <br />*/}

        {/*    <Subject subject="REACTJS" para="hello React"></Subject>*/}
        {/*<Subject subject="REACTJS" para="hello React"></Subject>*/}
        {/*<Subject subject="REACTJS" para="hello React"></Subject>*/}
        {/*<Subject subject="REACTJS" para="hello React"></Subject>*/}
        {/*<Subject subject="REACTJS" para="hello React"></Subject>*/}

        </>
        )

   // const isLoggedIn:boolean =true;
   //
   //

  //   const itemList =[
  //
  //       {
  //           title: "item 1",
  //           desc: "description 1"
  //       },
  //       {
  //           title: "item 2",
  //           desc: "description 2"
  //       },
  //       {
  //           title: "item 3",
  //           desc: "description 3"
  //       }
  //   ]
  //
  //       const itemArray=[];
  //        for (const itemArraysElement of itemList) {
  //            itemArray.push(<Item title={itemArraysElement.title} desc={itemArraysElement.desc} />)
  //        }
  //
  //
  // return (
  //   <>
  //
  //           <h1>Welcome to React with Vite</h1>
  //           <Button />
  //           <SmallButton />
  //       {itemList.map(item=>{
  //         <Item title={item} desc={item.desc} />
  //       })}
  //       {itemArray}
  //   </>
  // )
}
export default App;
