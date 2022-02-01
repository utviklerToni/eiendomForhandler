import { Fragment, useState } from 'react';

import './PlaceItem.css';
import Button from '../../shared/Components/FormElements/Button';
import Card from '../../shared/Components/UIElements/Card';
import Modal from '../../shared/Components/UIElements/Modal';
import Map from '../../components/Mapbox/Map';

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  // open and close map
  const openMap = () => setShowMap(true);
  const closeMap = () => setShowMap(false);

  // delete property
  const showDeleteWarning = () => {
    setConfirmDelete(true);
  };

  const cancelDeleteWarning = () => {
    setConfirmDelete(false);
  };

  const deletedWarning = () => {
    console.log('Deleting...');
  };

  return (
    <Fragment>
      <Modal
        show={showMap}
        onCancel={closeMap}
        header={props.address}
        contentClass='place-item-modal-content'
        footerClass='place-item-modal-actions'
        footer={<Button onClick={closeMap}>Close</Button>}
      >
        <div className='map-container'>
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={confirmDelete}
        onCancel={cancelDeleteWarning}
        header='Are you sure?'
        footerClass='place-item-modal-action'
        footer={
          <Fragment>
            <Button inverse onClick={cancelDeleteWarning}>
              Cancel
            </Button>
            <Button danger onClick={deletedWarning}>
              Delete
            </Button>
          </Fragment>
        }
      >
        <p>Delete this property permanently?</p>
      </Modal>

      <li className='place-item'>
        <Card className='place-item-content'>
          <div className='place-item-image'>
            <img src={props.image} alt={props.title} />
          </div>
          <div className='place-item-info'>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
          </div>

          <div className='place-item-actions'>
            <Button inverse onClick={openMap}>
              View on map
            </Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger onClick={showDeleteWarning}>
              Delete
            </Button>
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default PlaceItem;
