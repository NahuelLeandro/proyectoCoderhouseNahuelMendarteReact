
import './App.css'
import NavBarComponent from './components/NavBar/NavBarComponent.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import { BrowserRouter, Routes , Route  } from "react-router";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBarComponent/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/category/:categoryName' element={<ItemListContainer />}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer/>}>  </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
