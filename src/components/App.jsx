import { Profile } from "./user/Profile";
import {Statistics} from './Statistics/Statistics';
import {FriendList} from './FriendList/FriendList';
import { Transactions } from './Transactions/Transactions';
import operation from './Transactions/operation.json';
import user from './user/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';

export const App = () => {
  return (
    <div>
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
      title="Upload stats" 
      stats={data}
      />
      <FriendList  key = {friends.id}friends={friends}/>
      <Transactions key={operation.id} operation={operation}/>
    </div>
  );
};