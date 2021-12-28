import PropTypes from 'prop-types';
import {
  StatBox,
  Title,
  List,
  ListItem,
  Percentage,
} from './statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatBox>
      {{ title } && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id}>
            <span>{label}</span>
            <Percentage>{percentage}%</Percentage>
          </ListItem>
        ))}
      </List>
    </StatBox>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
