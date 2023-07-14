import css from './Profile.module.css';
import PropTypes from "prop-types";


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (<div className={css.profile}>
        <div className={css.description}>
            <img
                src={avatar}
                alt={username}
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className={css.stats}>
            <li>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{stats.views}</span>
            </li>
            <li>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>);
};

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
};