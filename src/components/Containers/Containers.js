import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  justify-self:${({justifySelf})=>justifySelf};
  ${({ width }) => (width ? `width:${width}` : null)}
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;
