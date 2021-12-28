import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;
  border: 1px solid #afb1b8;
  border-radius: 4px;
  box-shadow: 8px 11px 19px -7px rgba(34, 60, 80, 0.2);
`;

export const TableHead = styled.thead`
  /* padding: 100px;
border-bottom: 1px solid #afb1b8; */
  background-color: green;
  font-size: 16px;
  color: white;
`;

export const TD = styled.td`
  text-align: center;
  border: 1px solid #afb1b8;
`;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: lightgrey;
  }
`;
