import './App.css';
import {Routes, Route} from "react-router-dom";
import Accueil from './components/Accueil/Accueil';
import Logement from './components/Logement/Logement';
import Error from './components/Error/Error';
import Apropos from './components/Apropos/Apropos';
import { Footer, Header } from './Sections';

const App = () =>{
  return (
    <>
    <div className='content-wrapper'>
    <Header />
    {/* définir les différens routages */}
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='/logement/:id' element={<Logement />} />
      <Route path='/Apropos' element={<Apropos />}/>
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
    </div>
    </>
  );
}

export default App;