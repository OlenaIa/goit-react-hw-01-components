import { StatsList } from "components/StatsList/StatsList";
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export const Statistics = ({title, stats}) => {
    return (<section className={css.statistics}>
        {title && <h2 className="title">{title}</h2>}
        <StatsList stats={stats} />
    </section>);
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
}