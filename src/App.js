
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

/* import logoNav from `./components/NavBar/imagen-logo/logo.jpg` */

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
