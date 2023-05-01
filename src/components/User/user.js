import PropTypes from 'prop-types';
import css from './user.module.css';

export function Profile(props) {
  const { avatar, username, tag, location, followers, views, likes } = props;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <div className={css.description_info}>
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_listItem}>
          <span className={css.label}>Followers</span>
          <span className="quantity">{followers}</span>
          <span className={css.label_border}> | </span>
        </li>
        <li className={css.stats_listItem}>
          <span className={css.label}>Views</span>
          <span className="quantity">{views}</span>
          <span className={css.label_border}> | </span>
        </li>
        <li className={css.stats_listItem}>
          <span className={css.label}>Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  // followers: PropTypes.number.isRequired,
  // views: PropTypes.number.isRequired,
  // likes: PropTypes.number.isRequired,
};
