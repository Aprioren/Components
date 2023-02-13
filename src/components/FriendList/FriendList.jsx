import {
    ListOfFriends,
    ListOfFriendsItem,
    Status,
    Avatar,
    NickName
} from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({friends}) =>{
  return <ListOfFriends>
      {friends.map(({avatar, name, isOnline, id})=>{
          return <ListOfFriendsItem key={id}>
          <Status isOnline = {isOnline}>{isOnline && null}</Status>
          <Avatar src={avatar} alt="User avatar" width="48" />
          <NickName>{name}</NickName>
        </ListOfFriendsItem>
      })}
  </ListOfFriends>
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};