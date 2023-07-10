import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Accueil/Accueil';
import Logement from './components/Logement/Logement';
import Erreur from './components/Erreur/Erreur';
import Apropos from './components/Apropos/Apropos';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/logement' element={<Logement />}></Route>
      <Route path='/erreur' element={<Erreur />}></Route>
      <Route path='/a_propos' element={<Apropos />}></Route>
     </Routes>
    </div>
  );
}

export default App;
