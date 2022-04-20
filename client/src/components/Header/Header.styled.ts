import styled from '@emotion/styled';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: ${(props) => props.theme.spacing(5)};
  margin-bottom: ${(props) => props.theme.spacing(10)};
  padding-bottom: ${(props) => props.theme.spacing(2)};
  border-bottom: ${(props) => props.theme.border.dark.thin};
`;
export const Title = styled.h2`
  font-weight: 500;
  font-size: ${(props) => props.theme.font.max(1)};
  color: ${(props) => props.theme.colors.mainText};
`;
export const Options = styled.nav`
  & button {
    margin-right: ${(props) => props.theme.spacing(1)};
  }

  /* & button:nth-last-of-type(1) {
    margin-left: ${(props) => props.theme.spacing(2)};
  } */
`;
