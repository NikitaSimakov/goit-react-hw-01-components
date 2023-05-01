import { FriendsItem } from 'components/Friends/FriendsItem';
import css from './FriendsList.module.css';
export function FriendsList({ friends }) {
  return (
    <ul className={css.friends_list}>
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
