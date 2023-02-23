import PropTypes from 'prop-types';
import {
  AdditionalInfo,
  Avatar,
  Description,
  InfoBlock,
  InfoBlockData,
  InfoBlockText,
  InfoList,
  Name,
  ProfileContainer,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <Name>Petra Marica</Name>
        <AdditionalInfo>@pmarica</AdditionalInfo>
        <AdditionalInfo>Salvador, Brasil</AdditionalInfo>
      </Description>

      <InfoList class="stats">
        <InfoBlock>
          <InfoBlockText class="label">Followers</InfoBlockText>
          <InfoBlockData class="quantity">1000</InfoBlockData>
        </InfoBlock>
        <InfoBlock>
          <InfoBlockText class="label">Views</InfoBlockText>
          <InfoBlockData class="quantity">2000</InfoBlockData>
        </InfoBlock>
        <InfoBlock>
          <InfoBlockText class="label">Likes</InfoBlockText>
          <InfoBlockData class="quantity">3000</InfoBlockData>
        </InfoBlock>
      </InfoList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
