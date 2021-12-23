import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li class="item">
            <span class="id">{id}</span>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
