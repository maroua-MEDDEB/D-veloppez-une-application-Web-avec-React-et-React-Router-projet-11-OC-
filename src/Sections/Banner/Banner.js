import './Banner.css';
//function pour construire l'élément section_main de la page d'acueil
const Banner = () => {
  return (
    <div className="section_main">
      <div className="image_darkness">
        Chez vous, partout et ailleurs
      </div>
    </div>
  )
}

const Banner_apropos = () => {
  return (
    <>
    <div className="section_main_apropos">
      <div className="image_darkness">
        
      </div>
    </div>
    </>
  )
}

export default Banner
export {Banner_apropos}