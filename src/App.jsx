
import './App.css';
import ItemListContainer from './pages/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
/* import Home from './pages/home/index';
import Catalogo from './pages/catalogo/index';
import Detalles from './pages/detalles/index';
import { Route, Routes } from 'react-router-dom'; */

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <header className="App-header">
      <ItemListContainer greeting={'esta es mi pagina de prueba'}/>
      </header>
    </div>
  );
}


export default App;
