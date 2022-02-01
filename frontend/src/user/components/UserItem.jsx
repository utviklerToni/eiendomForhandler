import { Link } from 'react-router-dom';

import './UserItem.css';
import Avatar from '../../shared/Components/UIElements/Avatar';
import Card from '../../shared/Components/UIElements/Card';

const UserItem = (props) => {
  return (
    <div className='user-item'>
      <Card className='user-item-content'>
        <Link to={`/${props.id}/places`}>
          <div className='user-item-image'>
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className='user-item-info'>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default UserItem;
