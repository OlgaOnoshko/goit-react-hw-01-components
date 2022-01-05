import PropTypes from 'prop-types';
import { ListItem, Status, Image, Name } from './friendListItem.styled';

function FriendListItem({ id, avatar, name, isOnline }) {
  return (
    <ListItem key={id}>
      <Status isOnline={isOnline}></Status>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
