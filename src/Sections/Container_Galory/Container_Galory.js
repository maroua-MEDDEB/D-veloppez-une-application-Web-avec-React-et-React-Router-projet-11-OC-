import '../Container_Galory/Container_Galory.css';
import {Card} from '../../components/index';

const Container_Galory = () => {

  return (
    <div className='galorie_items'>
        <div className='galorie_item'>
            <div className='card'>
                  <Card />
            </div>

        </div>
    </div>
  )
}

export default Container_Galory