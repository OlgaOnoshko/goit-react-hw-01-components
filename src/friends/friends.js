import PropTypes from 'prop-types';
import { List, ListItem, Status, Image, Name } from './friends.styled';

function Friendlist({ friends }) {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <ListItem key={id}>
          <Status isOnline={isOnline}></Status>
          <Image src={avatar} alt="User avatar" width="48" />
          <Name>{name}</Name>
        </ListItem>
      ))}
    </List>
  );
}

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }),
  ),
};

export default Friendlist;
