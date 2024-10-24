import { useState } from "react"
import AllProducts from "./components/AllProducts/AllProducts"
import Carts from "./components/cards/Carts"
import Header from "./components/header/Header"

function App() {
 const [isActive, setIsActive]=useState(true);
 const [selectedProduct,setSelectedProduct]=useState([])

 const handleSelectedProduct=(product)=>{
  const isExist= selectedProduct.find((p)=>p.id ===product.id)
  if(isExist){
   return alert('Already Existed ')
  }else{
    const newSelectedProducts=[...selectedProduct,product]
    setSelectedProduct(newSelectedProducts)
  }
  
 }

 const handleDelete=(id)=>{
  const rimainProduct= selectedProduct.filter((p)=>p.id !==id)
  setSelectedProduct(rimainProduct)
 }

 
 const handleActiveBtn=(status)=>{
  if(status==='card'){
    setIsActive(true)
  }else(
    setIsActive(false)
  )
 }

  return (
    <>
     <Header selectedProduct={selectedProduct}></Header>
   <div className="flex max-w-5xl mx-auto justify-between">
    <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
    <Carts  handleDelete={ handleDelete} isActive={isActive} selectedProduct={selectedProduct} handleActiveBtn={handleActiveBtn}></Carts>
   </div>
      
    </>
  )
}

export default App
