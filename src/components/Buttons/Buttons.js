import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 2%;
  box-shadow: ${({ theme }) => theme.shadows.main};
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:disabled {
    background: gray;
    font-weight: bold;
  }
`;
export const NavButton = styled(Button)`
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.light};
  width:30%;
  border-radius: 5px;
  font-size: 1.2em;
  padding:1%;
  text-shadow: 1px 1px 1px #000,
               1px 1px 2px rgba(0,0,0,0.15),
               1px 1px 2px rgba(0,0,0,0.15);
  &:hover{      
    background: ${({ theme }) => theme.colors.lightTertiary};
    }
  &:disabled:hover{
      background: gray;
    }
  @media (min-width:600px){
    
    &::before,
    &::after {
      font-weight: bold;
      opacity:0;  
      transition: all 0.5s;
        }
    &::before{
      content:'<<';
      
      transform: translatex(0.5em);
        }
    &::after{
      content:'>>';
      transform: translatex(-0.5em);
        } 
    &:hover {
        &::before,
        &::after {
            font-weight: bold;
        }
        &::before {
            content:'<<';
            transform: translatex(-0.5em);
            opacity:${({ prev, disabled }) => (prev && disabled === false ? 1 : 0)};
        }
        &::after {
            content:'>>';
            transform: translatex(0.5em);
            opacity:${({ next, disabled }) => (next && disabled === false ? 1 : 0)};
    }
  
  }
`;

export const PaginationButton = styled(Button)`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.darkSecondary};
  width: 2em;
  height: 2em;
  margin: 1%;
  padding: 0;
  border-radius: 100%;
  font-weight:bold;
  text-shadow: 1px 0px 0px ${({ theme }) => theme.colors.dark}, 1px 1px 2px rgba(0, 0, 0, 0.15),
    1px 1px 2px rgba(0, 0, 0, 0.15);
  &:hover {
    background: ${({ theme }) => theme.colors.darkTertiary};
    color: ${({ theme }) => theme.colors.lightTertiary};
    box-shadow: ${({ theme }) => theme.shadows.mainHover};
    text-shadow: 1px 0px 0px #fff, 1px 1px 2px rgba(0, 0, 0, 0.15),
      1px 1px 2px rgba(0, 0, 0, 0.15);
  }
`;
