import PropTypes from 'prop-types';
import {
  Image,
  ProfileBox,
  Description,
  Name,
  Tag,
  Location,
  Stats,
  StatsItems,
  StatsLabel,
  StatsqQuantity,
} from './profile.styled';

function Profile({ username, tag, location, avatar, followers, views, likes }) {
  return (
    <ProfileBox>
      <Description>
        <Image src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <StatsItems>
          <StatsLabel>Followers</StatsLabel>
          <StatsqQuantity>{followers}</StatsqQuantity>
        </StatsItems>
        <StatsItems>
          <StatsLabel>Views</StatsLabel>
          <StatsqQuantity>{views}</StatsqQuantity>
        </StatsItems>
        <StatsItems>
          <StatsLabel>Likes</StatsLabel>
          <StatsqQuantity>{likes}</StatsqQuantity>
        </StatsItems>
      </Stats>
    </ProfileBox>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
