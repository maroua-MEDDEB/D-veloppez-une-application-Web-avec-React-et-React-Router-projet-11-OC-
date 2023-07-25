import '../Container_Galory/Container_Galory.css';
import {appartListData} from '../../datas/cardsData';
import {Card} from '../../components/index';

const Container_Galory = () => {

  //retourner un tableau cards qui contient le cover et le title depuis le tableau appartListData en utilisant la méthode map()
  const cards = appartListData.map((card) => { 
    return <Card key ={card.id} id = {card.id} title={card.title} cover={card.cover} pictures={card.pictures} />
  });

  return (
    <div className='galorie_items'>
        {cards};  {/* afficher les données */}
    </div>
  )
}

export default Container_Galory