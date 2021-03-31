import React from 'react';

import Card from '../../../shared/components/UI-elements/card/card.component';
import UserItem from '../users-item/user-item.component';
import './users-list.style.scss';

const UserList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found!</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {items.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
