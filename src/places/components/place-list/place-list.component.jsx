import React from 'react';
import Button from '../../../shared/components/form-elements/button/button.component';

import Card from '../../../shared/components/UI-elements/card/card.component';
import PlaceItem from '../place-item/place-item.component';
import './place-list.style.scss';

const PlaceList = ({ items, onDeletePlace }) => {
  if (items.length === 0) {
    return (
      <div className="place-list center">
        <Card style={{ padding: '1.6rem 1.4rem' }}>
          <h2>No places found! Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem key={place.id} place={place} onDelete={onDeletePlace} />
      ))}
    </ul>
  );
};

export default PlaceList;
