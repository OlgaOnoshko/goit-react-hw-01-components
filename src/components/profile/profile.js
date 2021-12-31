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

function Profile({ username, tag, location, avatar, stats }) {
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
          <StatsqQuantity>{stats.followers}</StatsqQuantity>
        </StatsItems>
        <StatsItems>
          <StatsLabel>Views</StatsLabel>
          <StatsqQuantity>{stats.views}</StatsqQuantity>
        </StatsItems>
        <StatsItems>
          <StatsLabel>Likes</StatsLabel>
          <StatsqQuantity>{stats.likes}</StatsqQuantity>
        </StatsItems>
      </Stats>
    </ProfileBox>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  ),
};

export default Profile;
