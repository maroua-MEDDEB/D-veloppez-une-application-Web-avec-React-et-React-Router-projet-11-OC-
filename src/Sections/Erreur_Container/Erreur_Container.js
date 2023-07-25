import './Erreur_Container.css';
import { Link } from 'react-router-dom';

const Erreur_Container = () => {
  return (
    <>
    <div className='erreur_container'>
      <div className="code_erreur">404</div>
      <div className='text'>
        <div className='text_erreur'>Oups! La page que vous demandez n'existe pas.</div>
        <div className='text_return_page'><Link to="/">  Retourner sur la page d’accueil</Link> </div>
      </div>
    </div>
    </>
  )
}

export default Erreur_Container