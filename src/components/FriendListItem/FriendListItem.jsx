import css from './FriendListItem.module.css';
import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (<li className={css.item} key={`${id}`}>
        <span className={ isOnline ? `${css.status} ${css.green}` : `${css.status} ${css.red}`}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
    </li>);
}; 

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
}