import './App.css';
import {Routes, Route} from "react-router-dom";
import Accueil from './components/Accueil/Accueil';
import Logement from './components/Logement/Logement';
import Error from './components/Error/Error';
import Apropos from './components/Apropos/Apropos';

const App = () =>{
  return (
    <>
    {/* définir les différens routages */}
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/logement' element={<Logement />} />
      <Route path='/Apropos' element={<Apropos />}/>
      <Route path='*' element={<Error />} />
    </Routes>
    </>
  );
}

export default App;