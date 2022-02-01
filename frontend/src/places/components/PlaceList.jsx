import './PlaceList.css';

import Card from '../../shared/Components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/Components/FormElements/Button';

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <Button>Share place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className='place-list'>
      {props.items.map((props) => (
        <PlaceItem
          key={props.id}
          id={props.id}
          image={props.imageUrl}
          title={props.title}
          description={`Description: ${props.description}`}
          address={`Address: ${props.address}`}
          creatorId={props.creator}
          coordinates={props.location}
          price={`Price: ${props.price}`}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
