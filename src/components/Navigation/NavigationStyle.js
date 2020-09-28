import styled from 'styled-components';
import {Flex}from '../Containers/Containers'
export const NavContainer = styled(Flex)`
  background: ${({ theme }) => theme.colors.light};
  
  width: 100%;
  @media (min-width: 900px) {
    width: 50%;
  }
  margin:1%1%;
  padding: 0 1%;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.main};
`;