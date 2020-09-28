import { Flex, FlexColumn } from '../Containers/Containers';
import styled from 'styled-components';

export const Container = styled(FlexColumn)`
  color: ${({ theme }) => theme.colors.darkSecondary};
  font-size: 1.1em;
  padding: 1% 0;
  text-shadow: 1px 1px 1px #fff, 2px 2px 1px rgba(0, 0, 0, 0.15),
    1px 1px 1px rgba(0, 0, 0, 0.15);
  & > * {
    text-align: center;
  }
`;
export const ButtonWrapper = styled(Flex)`
  width: 100%;
  margin: 1% 0;
  justify-content: center;
`;