import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/Components/FormElements/Input';
import Button from '../../shared/Components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import './NewPlace.css';
import { useForm } from '../../shared/hooks/form-hooks';
import Card from '../../shared/Components/UIElements/Card';

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

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },

      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true
    );

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className='center'>
        <Card>
          <h2>Could not fnd place</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='center'>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='plz enter a valid title'
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(9)]}
        errorText='plz enter description with min length 9'
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type='submit' disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
