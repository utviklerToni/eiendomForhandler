import UsersList from '../components/UserList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      price: '300,000kr',
      name: 'Two bed-room house',
      image:
        'https://images.pexels.com/photos/4654551/pexels-photo-4654551.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'u2',
      price: '100,000kr',
      name: 'Summer house ',
      image:
        'https://images.pexels.com/photos/3395142/pexels-photo-3395142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'u3',
      price: '100,000kr',
      name: '4 bed-room house',
      image:
        'https://images.pexels.com/photos/4654556/pexels-photo-4654556.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'u4',
      price: '100,000kr',
      name: 'Resort house',
      image:
        'https://images.pexels.com/photos/4738520/pexels-photo-4738520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'u5',
      price: '100,000kr',
      name: 'Vacation cabin ',
      image:
        'https://images.pexels.com/photos/4738523/pexels-photo-4738523.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 'u6',
      price: '100,000kr',
      name: 'New cabin',
      image:
        'https://images.pexels.com/photos/4738517/pexels-photo-4738517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
