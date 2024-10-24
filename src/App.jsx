import { useState } from "react"
import AllProducts from "./components/AllProducts/AllProducts"
import Carts from "./components/cards/Carts"
import Header from "./components/header/Header"

function App() {
 const [isActive, setIsActive]=useState(true);
 
 const handleActiveBtn=(status)=>{
  if(status==='card'){
    setIsActive(true)
  }else(
    setIsActive(false)
  )
 }

  return (
    <>
     <Header></Header>
   <div className="flex max-w-5xl mx-auto justify-between">
    <AllProducts></AllProducts>
    <Carts isActive={isActive} handleActiveBtn={handleActiveBtn}></Carts>
   </div>
      
    </>
  )
}

export default App
