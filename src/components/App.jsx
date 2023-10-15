import user from '../data/user';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import data from '../data/data';
import { FriendList } from './friend-list/FriendList';
import friends from '../data/friends'
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from '../data/transactions';

console.log(friends[0].isOnline);
  
export const App = () => {
  return (
    <div>
          <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
    <Statistics
    title="Statistics"
    stats={data}/>
     <FriendList
     friends={friends}/>
     <TransactionHistory
     items={transactions}/>
    </div>
  );
};
