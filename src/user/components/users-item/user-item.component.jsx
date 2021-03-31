import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../../shared/components/UI-elements/avatar/avatar.component';
import Card from '../../../shared/components/UI-elements/card/card.component';
import './user-item.style.scss';

const UserItem = ({ user }) => {
  const { id, name, image, places } = user;

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__iamge">
            <Avatar
              image={`${process.env.REACT_APP_ASSET_URL}/${image}`}
              alt={name}
            />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {places.length} {places.length === 1 ? 'place' : 'places'}{' '}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
