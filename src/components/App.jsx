import { Profile } from 'components/User/user'
import { Statistics } from 'components/Statistics/data';
import { FriendsList } from 'components/Friends/FriendsList';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';
import user from 'data/user'
import data from 'data/data';
import friends from 'data/friends';
import transaction from 'data/transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
      <Statistics 
      title={"Upload stats"} 
      stats={data} 
      key={data.id} 
      />
      <FriendsList friends={friends}/>
      <TransactionHistory  transaction={transaction}/>
    </div>
  );
};
