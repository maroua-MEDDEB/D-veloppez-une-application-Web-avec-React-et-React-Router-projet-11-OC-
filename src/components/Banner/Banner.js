import './Banner.css';

//function pour construire l'élément section_main de la page d'acueil
const Banner = (props) => {
  return (
    <>
    <div className="section_main_home_page">
      <div className="image_darkness">
        Chez vous, partout et ailleurs
        {props.children}
      </div>
    </div>
    </>
  )
}

const Banner_apropos = (props) => {
  return (
    <div className="section_main_about_page">
      <div className="image_darkness"> {props.children} </div>
    </div>
  )
}

export default Banner
export {Banner_apropos}