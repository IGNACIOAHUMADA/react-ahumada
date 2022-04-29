
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
/* import Home from './pages/home/index';
import Catalogo from './pages/catalogo/index';
import Detalles from './pages/detalles/index';
import { Route, Routes } from 'react-router-dom'; */

function App() {
  return (
    <div className="App">
      <NavBar/> 
  {/*     <ul>
        <li><link to={'/'}>Home</link></li>
        <li><link to={'/'}> Catalogo</link></li>
        <li><link to={'/'}>detalles</link></li>
      </ul>
      <div>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/catalogo' element={<Catalogo/>}/>
            <Route path='/detalles' element={<Detalles/>}/>
          </Routes> 
      </div> */}
      <header className="App-header">
      <ItemListContainer greeting={'esta es mi pagina de prueba'}/>
        
      </header>
    </div>
  );
}


export default App;
