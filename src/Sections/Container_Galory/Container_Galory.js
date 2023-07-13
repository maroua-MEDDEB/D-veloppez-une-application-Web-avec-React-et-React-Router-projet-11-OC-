import '../Container_Galory/Container_Galory.css';
import React, {useState, useEffect} from 'react';

const Container_Galory = () => {
//récupérer les données du fichier data.json pour le coposant fonctionnel
    // Définir des variables d'état pour stocker la réponse de l'API à l'aide de la méthode useState
    const [ setData] = useState([]);
    useEffect(() => {
        fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
          .then(res => res.json())
          .then(
            (result) => {
              setData(result);
            }
          )
    }, []);

  return (
    <div className='galorie_items'>
        <div className='galorie_item'>
            <div className='card_wrapper'>

            </div>

        </div>
    </div>
  )
}

export default Container_Galory