// import PropTypes from 'prop-types';
import { FriendsItem } from './FriendsItem';
export function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendsItem
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

console.log(FriendsItem);
