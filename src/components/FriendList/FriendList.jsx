import PropTypes from "prop-types";
import css from './FriendList.module.css';
import { FriendListItem } from "components/FriendListItem/FriendListItem";

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>
            {friends.map(friend => {
                return <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id} />
            })
            }
    </ul>);
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
}