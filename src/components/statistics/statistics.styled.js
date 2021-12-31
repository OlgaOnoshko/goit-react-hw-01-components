import styled from '@emotion/styled';
import getRandomHexColor from '../../utils/RandomColors';

export const StatBox = styled.section`
  width: 300px;
  margin-bottom: 40px;
  border: 1px solid #afb1b8;
  border-radius: 4px;
  box-shadow: 8px 11px 19px -7px rgba(34, 60, 80, 0.2);
`;

export const Title = styled.h2`
  margin: 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid #afb1b8;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  flex-basis: calc(100% / 5);
  padding: 5px;
  background-color: ${getRandomHexColor};
`;

export const Percentage = styled.span`
  margin-top: 5px;
  font-weight: bold;
`;
