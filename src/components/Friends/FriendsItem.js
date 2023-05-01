import PropTypes from 'prop-types';
import css from './FriendsItem.module.css';

export function FriendsItem(prop) {
  const { isOnline, avatar, name } = prop;
  return (
    <li className={css.item}>
      <span className="status" width="10px">
        {isOnline ? '🟢' : '⚪'}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendsItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};
