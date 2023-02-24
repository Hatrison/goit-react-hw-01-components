import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #a7a7a7;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.isOnline) return 'green';
    return 'red';
  }};
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 3px;
`;

export const Name = styled.p`
  font-weight: 700;
`;
