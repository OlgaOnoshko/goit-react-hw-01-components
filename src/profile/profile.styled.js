import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  border: 1px solid #afb1b8;
  border-radius: 4px;
  box-shadow: 8px 11px 19px -7px rgba(34, 60, 80, 0.2);
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const Name = styled.p`
  margin-top: 0px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const Tag = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #afb1b8;
`;

export const Location = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #afb1b8;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0px;
  background-color: #f5f4fa;
  border-top: 1px solid #afb1b8;
`;

export const StatsItems = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 3);
  border-left: 1px solid #afb1b8;
`;

export const StatsLabel = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  color: #afb1b8;
`;

export const StatsqQuantity = styled.span`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;
