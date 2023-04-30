import PropTypes from 'prop-types';
import data from 'data/data';

export function Statistics(prop) {
  return (
    <section className="statistics">
      {prop.title ? <h2 className="title">{prop.title}</h2> : undefined}

      <ul className="stat-list">
        {data.map(stats => (
          <li className="item" key={stats.id}>
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  key: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
