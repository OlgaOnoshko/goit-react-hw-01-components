import PropTypes from 'prop-types';
import FriendListItem from '../friendListItem/friendListItem';
import { List } from './friends.styled';

function Friendlist({ friends }) {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </List>
  );
}

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default Friendlist;
