import './Error_Container.css';
import { Link } from 'react-router-dom';

const Error_Container = () => {
  return (
    <>
    <div className='error_container'>
      <div className="cod_error">404</div>
      <div className='text'>
        <div className='text_error'>Oups! La page que vous demandez n'existe pas.</div>
        <div className='text_return_page'><Link to="/">  Retourner sur la page d’accueil</Link> </div>
      </div>
    </div>
    </>
  )
}

export default Error_Container