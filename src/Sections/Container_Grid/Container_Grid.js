import '../Container_Grid/Container_Grid.css';
import {appartListData} from '../../datas/cardsData';
import {Card} from '../../components/index';

const Container_Grid = () => {

  //retourner un tableau cards qui contient le cover et le title depuis le tableau appartListData en utilisant la méthode map()
  const cards = appartListData.map((card) => { 
    return <Card key ={card.id} id = {card.id} title={card.title} cover={card.cover} />
  });

  return (
    <div className='grid_container'>
      <div className='grid_items'>
        {cards};  {/* afficher les données */}
      </div>
    </div>
  )
}

export default Container_Grid