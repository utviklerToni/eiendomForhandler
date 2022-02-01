import './UserList.css';
import Card from '../../shared/Components/UIElements/Card';
import UserItem from './UserItem';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className='  heading-property-page'>
        <h1>Norsk Eiendom</h1>
      </div>
      <ul className='users-list'>
        {props.items.map((user) => {
          return (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              price={`Price: ${user.price}`}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
