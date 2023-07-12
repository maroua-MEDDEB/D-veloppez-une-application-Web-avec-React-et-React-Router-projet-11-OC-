import './App.css';
import {Routes, Route} from "react-router-dom";
import Accueil from './components/Accueil/Accueil';
import Logement from './components/Logement/Logement';
import Erreur from './components/Erreur/Erreur';
import Apropos from './components/Apropos/Apropos';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/logement' element={<Logement />} />
      <Route path='/erreur' element={<Erreur />} />
      <Route path='/a_propos' element={<Apropos />} />
    </Routes>
    </>
  );
}

export default App;
