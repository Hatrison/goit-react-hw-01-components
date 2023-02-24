import styled from 'styled-components';

export const Table = styled.table`
  margin: 20px auto;
`;

export const TableHead = styled.th`
  color: white;
  padding: 10px 50px;
  background: rgb(0, 153, 255);
`;

export const TableBody = styled.tbody`
  tr:nth-child(2n) {
    background-color: #e7e7e7;
  }
`;
