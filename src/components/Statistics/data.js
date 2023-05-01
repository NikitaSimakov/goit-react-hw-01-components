import PropTypes from 'prop-types';
import data from 'data/data';
import css from './statistics.module.css';

export function Statistics(prop) {
  return (
    <section className={css.statistics}>
      {prop.title ? <h2 className={css.title}>{prop.title}</h2> : undefined}

      <ul className={css.stat_list}>
        {data.map(stats => (
          <li className={css.item} key={stats.id}>
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