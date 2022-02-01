import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Two bed-room house',
    price: '300,000Kr',
    description: 'Simple and elegant house in Norway!',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc1.staticflickr.com%2F9%2F8448%2F7815641392_0ec59687ce_b.jpg&f=1&nofb=1',
    address: '20 W 34th St, Erik Street, Norge 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Summer house',
    price: '100,000Kr',
    description: 'A 6bed room house away from all the rush life',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftomfear.com%2Fwp-content%2Fuploads%2F2014%2F12%2Fgamlebergen3.jpg&f=1&nofb=1',
    address: '#18 north lane, Kragerø, Vestfold og Kragerø, Norge',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u2',
  },
];
// const DUMMY_PLACES = [
//   {
//     id: 'p1',

//     title: 'Nature never does bad',
//     description: 'neat water with green mountains',
//     imageUrl:
//       'https://images.pexels.com/photos/1559825/pexels-photo-1559825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     address: 'neat water with green mountains in Norge',
//     location: {
//       lat: 69.696969,
//       lng: -69.696969,
//     },
//     creator: 'u1',
//   },
//   {
//     id: 'p2',

//     title: 'Hjem at jeg skal har',
//     description: 'Mit navn er Toni og jeg skal finne en jobbe i Norge i år',
//     imageUrl:
//       'https://images.pexels.com/photos/1940041/pexels-photo-1940041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//     address: 'Norge',
//     location: {
//       lat: 69.696969,
//       lng: -69.696969,
//     },
//     creator: 'u2',
//   },
// ];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);

  return (
    <div>
      <PlaceList items={loadedPlaces} />
    </div>
  );
};

export default UserPlaces;
