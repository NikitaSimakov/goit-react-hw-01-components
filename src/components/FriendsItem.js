import PropTypes from 'prop-types';

export function FriendsItem(prop) {
  const { isOnline, avatar, name } = prop;
  return (
    <li className="item">
      <span className="status">{isOnline ? '💚' : '🤍'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendsItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};
