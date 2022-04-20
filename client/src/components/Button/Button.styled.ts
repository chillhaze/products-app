import styled from '@emotion/styled';

export const Btn = styled.button`
  padding-top: ${(props) => props.theme.spacing(1)};
  padding-right: ${(props) => props.theme.spacing(3)};
  padding-bottom: ${(props) => props.theme.spacing(1)};
  padding-left: ${(props) => props.theme.spacing(3)};
  color: ${(props) => props.theme.colors.secondaryText};
  background-color: ${(props) => props.theme.colors.secondaryBg};
  border: ${(props) => props.theme.border.dark.thin};
  border-radius: ${(props) => props.theme.border.radius(1)};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.mainText};
    background-color: ${(props) => props.theme.colors.mainBg};
    border: ${(props) => props.theme.border.dark.thin};
    transition: 200ms linear;
  }

  &:active {
    color: ${(props) => props.theme.colors.accentColor};
    background-color: ${(props) => props.theme.colors.secondaryBg};
    transition: 200ms linear;
  }

  &:focus-visible {
    color: ${(props) => props.theme.colors.accentColor};
    background-color: ${(props) => props.theme.colors.secondaryBg};
    outline-offset: 2px;
    outline-style: solid;
    outline: 1px solid ${(props) => props.theme.colors.primary};
    transition: 200ms linear;
  }
`;
