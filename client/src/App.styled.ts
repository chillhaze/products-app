import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  padding: 0 ${(props) => props.theme.spacing(3)};
  margin: 0 auto;
  max-width: ${(props) => props.theme.spacing(300)};
  background-color: ${(props) => props.theme.colors.mainBg};
`;
