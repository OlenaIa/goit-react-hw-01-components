import PropTypes from "prop-types";
import css from "./StatsList.module.css"
import { makeGreen } from "./makeGreen";
 
export const StatsList = ({ stats }) => {
    return (
        <ul className={css.statList}>
            {stats.map( ({id, label, percentage}) => {
                return (<li className={css.item} key={id} style={{backgroundColor: `${makeGreen()}`}}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
            </li>)
            })}
        </ul>
    )
};

StatsList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.object).isRequired
}