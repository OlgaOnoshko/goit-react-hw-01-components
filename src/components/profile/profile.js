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
  const { followers, views, likes } = stats;
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
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
