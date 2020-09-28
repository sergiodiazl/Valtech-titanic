import styled from 'styled-components';

 const PeopleListStyle = styled.table`
  color: ${({ theme }) => theme.colors.main};
  border: none;
  border-spacing: 0;
  table-layout: fixed;
  align-self:center;
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }

  margin: 1% 0 0 0;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.main};
  & th {
    padding: 1% 0;
    background: ${({ theme }) => theme.colors.darkSecondary};
    color: ${({ theme }) => theme.colors.light};
    font-size: 1.2em;
    text-shadow: 1px 1px 1px #000, 1px 1px 2px rgba(0, 0, 0, 0.15),
      1px 1px 2px rgba(0, 0, 0, 0.15);
    box-shadow: ${({ theme }) => theme.shadows.main};
  }
  & th:first-of-type {
    border-radius: 5px 00 0;
  }
  & th:last-of-type {
    border-radius: 0 5px 0 0;
  }
  //filas collumna
  & tr {
    padding: 1%;
    text-align: center;
  }
  & tr td {
    padding: 1%;
    text-align: center;
  }
  & tr td:first-of-type {
    padding: 1%;
    text-align: left;
  }
  & tr:nth-child(even) {
    background: ${({ theme }) => theme.colors.dark};
  }
  & tr:nth-child(odd) {
    background: ${({ theme }) => theme.colors.light};
  }

  & tr:last-child td:last-of-type {
    border-radius: 0 0 5px 0px;
  }
  & tr:last-child td:first-of-type {
    border-radius: 0 0 0px 5px;
  }
  & tr.no-result {
    background-color: red;
    width: 100%;
  }
`;

export default PeopleListStyle