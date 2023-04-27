import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import user from './data/user';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Profile(props) {
  const { avatar, username, tag, location, followers, views, likes } = props;
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />,
  document.querySelector('#root')
);
// console.log(root.render);
