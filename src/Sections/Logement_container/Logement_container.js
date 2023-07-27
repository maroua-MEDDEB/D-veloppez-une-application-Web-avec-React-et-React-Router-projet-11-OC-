import './Logement_container.css';
import {Slideshow} from "../../components/index";
import {appartListData} from '../../datas/cardsData';
import { useState } from 'react';



const Logement_container = () => {
    //retourner un tableau slides qui contient les données  depuis le tableau appartListData en utilisant la méthode map()
  const slides = appartListData.map((slide) => { 
    return <Slideshow key ={slide.id} id = {slide.id} title={slide.title} cover={slide.cover} pictures={slide.pictures} />
  });
  console.log(slides);
  //récupérer l'élément du tableau slides qui porte le même id de la carte sélectionné


  return (
    <>
    <div>
    {slides};
   
    </div>
   
    </>

    )
}

export default Logement_container