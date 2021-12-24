import Profile from '../profile/profile';
import user from '../components/user.json';
import Statistics from '../statistics/statistics';
import stats from '../components/stats.json';

function App() {
  return (
    <>
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
      <Statistics title="Upload stats" stats={stats} />
    </>
  );
}

export default App;
