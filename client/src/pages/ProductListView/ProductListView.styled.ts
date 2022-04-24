import styled from '@emotion/styled';

export const List = styled.ul`
  min-height: ${(props) => props.theme.spacing(120)};
  margin-top: calc(-1 * ${(props) => props.theme.spacing(4)});
  margin-left: calc(-1 * ${(props) => props.theme.spacing(4)});
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
