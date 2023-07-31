import './Logement_container.css';
import { Details, Carousel} from "../../components/index";
import {appartListData} from '../../datas/cardsData';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const Logement_container = () => {
  //récupérer le paramètre id de l'url
  const {id} = useParams();

  const navigate = useNavigate(); 

  // Rechercher l'élément du tableau appartLIstData en fonction de l'id de l'url
  const selectedItem = appartListData.find((item) => {
    return item.id === id;
  });
// console.log(selectedItem);

const currentId = selectedItem?.id === id; // je vérifie si l'id de la carte sélectionnée dans l'url existe ou non

//si l'id de la carte dans l'url n'existe pas alors je passe à la pge d'eereur avec le hook navigate
if(!currentId){
  navigate('/Error');
}

  // Récupérer les éléments à afficher dans la page
  const pictures = selectedItem?.pictures; //récupérer les prictures
  const title = selectedItem?.title;
  const location = selectedItem?.location;
  const tags = selectedItem?.tags;
  // console.log(tags);
  const hostName= selectedItem?.host.name;
  const hostPicture = selectedItem?.host.picture;
  const rating = selectedItem?.rating;
  const description = selectedItem?.description;
  const equipments = selectedItem?.equipments;
  
  // je rerender la page si l'événnement est déclenché (l'événnement: changé l'id manuellement par exemple) 
  useEffect(() => {
    navigate()
  }, [navigate]);

  if(selectedItem){
  return (
    <div className='logement_container'>
    <Carousel pictures={pictures}/>
    <Details title={title} location={location} tags={tags} hostName={hostName}
    hostPicture={hostPicture} rating={rating} description={description} equipments = {equipments} />
    </div>
    )
  }
  
}

export default Logement_container