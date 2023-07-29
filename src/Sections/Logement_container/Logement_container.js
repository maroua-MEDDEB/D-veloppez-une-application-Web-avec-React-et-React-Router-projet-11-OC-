import './Logement_container.css';
import { Details, Carousel} from "../../components/index";
import {appartListData} from '../../datas/cardsData';
import { useParams } from 'react-router-dom';



const Logement_container = () => {
  //récupérer le paramètre id de l'url
  const {id} = useParams();

  // Rechercher l'élément du tableau appartLIstData en fonction de l'id de l'url
  const selectedItem = appartListData.find((item) => {
    return item.id === id;
  });
console.log(selectedItem);

  // Récupérer les éléments à afficher dans la page
  const pictures = selectedItem.pictures; //récupérer les prictures
  const title = selectedItem.title;
  const location = selectedItem.location;
  const tags = selectedItem.tags;
  // console.log(tags);
  const hostName= selectedItem.host.name;
  console.log(hostName);
  const hostPicture = selectedItem.host.picture;
  const rating = selectedItem.rating;
  

  return (
    <div className='logement_container'>
    <Carousel pictures={pictures}/>
    <Details title={title} location={location} tags={tags} hostName={hostName}
    hostPicture={hostPicture} rating={rating} />
    </div>
    )
}

export default Logement_container