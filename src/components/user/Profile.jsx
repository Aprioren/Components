import PropTypes from 'prop-types';
import { 
    Container,
    DescriptionContainer,
    Avatar,
    UserInfo,
    UserName,
    StatsList,
    ListItems,
    Stats,
    Metrics,
} from './Profile.styled';

export const Profile = ({avatar, username, tag, location, followers, views, likes}) =>{
    return <Container>
    <DescriptionContainer>
        <Avatar src={avatar}/>
        <UserName>{username}</UserName>
        <UserInfo>{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
    </DescriptionContainer>

    <StatsList>
        <ListItems>
        <Stats>Followers</Stats>
        <Metrics>{followers}</Metrics>
        </ListItems>
        <ListItems>
        <Stats>Views</Stats>
        <Metrics>{views}</Metrics>
        </ListItems>
        <ListItems>
        <Stats>Likes</Stats>
        <Metrics>{likes}</Metrics>
        </ListItems>
    </StatsList>
    </Container>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    }),
};    