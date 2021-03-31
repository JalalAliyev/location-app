import React, { useState, useContext } from 'react';
import Button from '../../../shared/components/form-elements/button/button.component';
import Card from '../../../shared/components/UI-elements/card/card.component';
import ErrorModal from '../../../shared/components/UI-elements/error/error-modal.component';
import Map from '../../../shared/components/UI-elements/map/map.component';
import Modal from '../../../shared/components/UI-elements/modal/modal.component';
import LoadingSpinner from '../../../shared/components/UI-elements/spinner/loading-spinner.component';
import { AuthContext } from '../../../shared/context/auth-context';
import { useHttpClient } from '../../../shared/hooks/http-hook';

import './place-item.style.scss';

const PlaceItem = ({ place, onDelete }) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const showMapHandler = () => {
    setShowMap(!showMap);
  };

  const showWarningHandler = () => {
    setShowConfirm(!showConfirm);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirm(false);
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places/${place.id}`,
        'DELETE',
        null,
        { Authorization: `Bearer ${auth.token}` },
      );
      onDelete(place.id);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showMap}
        onCancel={showMapHandler}
        header={place.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions">
        <Map
          latUser={place.location.lat}
          lngUser={place.location.lng}
          zoomUser={15}
        />
      </Modal>
      <Modal
        show={showConfirm}
        onCancel={showWarningHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={showWarningHandler}>
              Cancel
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Delete
            </Button>
          </React.Fragment>
        }>
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item-content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="place-item-content__image">
            <img
              src={`${process.env.REACT_APP_ASSET_URL}/${place.image}`}
              alt={place.title}
            />
          </div>
          <div className="place-item-content__info">
            <h2>{place.title}</h2>
            <h3>{place.address}</h3>
            <p>{place.description}</p>
          </div>
          <div className="place-item-content__actions">
            <Button inverse onClick={showMapHandler} children="View on Map" />
            {auth.userId === place.creator && (
              <React.Fragment>
                <Button to={`/places/${place.id}`} children="Edit" />
                <Button danger children="Delete" onClick={showWarningHandler} />
              </React.Fragment>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
