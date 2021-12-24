import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {{ title } && <h2>{title}</h2>}
      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;