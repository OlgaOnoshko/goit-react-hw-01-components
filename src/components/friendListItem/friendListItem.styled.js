import styled from '@emotion/styled';

export const ListItem = styled.li`
  position: relative;
  display: flex;
  border: 1px solid #afb1b8;
  border-radius: 4px;
  box-shadow: 8px 11px 19px -7px rgba(34, 60, 80, 0.2);
  margin-bottom: 20px;
`;

export const Status = styled.span`
  position: absolute;
  top: 30%;
  left: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 60px;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: bolder;
  margin-left: 20px;
`;
