import { Flex } from '../Containers/Containers';
import styled from 'styled-components';
export const FormContainer = styled.form`
  color: ${({ theme }) => theme.colors.light};
  width: 100%;
  background: ${({ theme }) => theme.colors.dark};
  justify-self:flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2% 0 1% 0;
  box-shadow: ${({ theme }) => theme.shadows.main};
  text-shadow: 1px 1px 1px #000, 1px 1px 2px rgba(0, 0, 0, 0.15),
    1px 1px 2px rgba(0, 0, 0, 0.15);
  @media (min-width: 900px) {
    width: 50%;
  }

  & h2 {
    text-align: center;
    width: 100%;
    font-family: 'Playfair Display', Roboto;
    border-bottom: 5px double ${({ theme }) => theme.colors.light};
  }
`;
export const FieldContainer = styled(Flex)`
  margin: 1%;
  align-items: flex-start;
  justify-content: flex-start;

  & label {
    text-align: center;
    font-size: 1.3em;
    width: 100%;
    border-bottom: 2px double ${({ theme }) => theme.colors.light};
    margin-bottom: 0.5em;
  }
  & input[type='text'] {
    width: 100%;
    padding: 3%;
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.main};
  }
  & input[type='text']:focus {
    outline: 1px inset ${({ theme }) => theme.colors.dark};
  }
`;
export const AgeContainer = styled(FieldContainer)`
  flex-direction: row;
  justify-content: space-between;
  & label {
    font-size: 1em;
    width:auto;
    border:none;
  }
`;
