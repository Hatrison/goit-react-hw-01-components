import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 20px;
  padding-bottom: 0;
  border: 1px solid #d7d7d7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

export const AdditionalInfo = styled.p`
  color: #767676;
`;

export const InfoList = styled.ul`
  display: flex;
`;

export const InfoBlock = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100px;
  width: 100px;
  border: 1px solid #a7a7a7;
`;

export const InfoBlockText = styled.span`
  color: #767676;
`;

export const InfoBlockData = styled.span`
  font-weight: 700;
`;
