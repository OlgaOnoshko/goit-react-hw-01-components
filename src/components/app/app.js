import Profile from '../profile/profile';
import user from '../user.json';
import Statistics from '../statistics/statistics';
import stats from '../stats.json';
import Friendlist from '../friends/friends';
import friends from '../friends.json';
import TransactionHistory from '../transaction-history/transaction-history';
import transactions from '../transactions.json';
import { Container } from './app.styled';

function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
