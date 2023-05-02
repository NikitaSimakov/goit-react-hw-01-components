import PropTypes from 'prop-types';
import data from 'data/data';
import css from './statistics.module.css';

export function Statistics(prop) {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  return (
    <section className={css.statistics}>
      {prop.title && <h2 className={css.title}>{prop.title}</h2>}

      <ul className={css.stat_list}>
        {data.map(stats => (
          <li
            style={{ backgroundColor: getRandomHexColor() }}
            className={css.item}
            key={stats.id}
          >
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
