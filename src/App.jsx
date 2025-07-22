
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import { BrowserRouter , Routes, Route, Link } from "react-router"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./Components/Cart/Cart"
import Checkout from "./Components/Checkout/Checkout"



function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      {/* <Link to={"/about"}>about</Link> */}
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/about" element={<div>estoy en la ruta abaut</div>} />
        <Route path="/category/:categoryName" element={<ItemListContainer/> } />
        <Route path="/item/:id" element={<ItemDetailContainer/> } />
        <Route path="/cart" element={<Cart/> } />
        <Route path="/checkout" element={<Checkout/> } />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
