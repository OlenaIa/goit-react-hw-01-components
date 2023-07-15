import user from "../data/user.json";
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from "../data/transactions.json";
import { Profile } from './Profile/Profile'
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import css from "./App.module.css"

export const App = () => {
  return (
    <div className={css.main}>
      <h1>React homework template</h1>
      <div className={css.taskContainer}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics
          title="Upload stats"
          stats={data}
        />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
