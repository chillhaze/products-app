import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: calc(-1 * ${(props) => props.theme.spacing(4)});
  margin-left: calc(-1 * ${(props) => props.theme.spacing(4)});
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  position: relative;
  margin-top: ${(props) => props.theme.spacing(4)};
  margin-left: ${(props) => props.theme.spacing(4)};
  flex-basis: calc(100% / 3 - ${(props) => props.theme.spacing(4)});

  color: ${(props) => props.theme.colors.mainText};
  border: ${(props) => props.theme.border.dark.thin};
  border-radius: ${(props) => props.theme.border.radius(1)};

  transition: transform 300ms linear;
  /* box-shadow: 1px 3px 10px -4px #050505; */

  &:hover,
  &:focus {
    box-shadow: 0px 1px 17px 0px #313232;
    transform: scale(1.01);
  }
`;
export const Type = styled.span`
  position: absolute;
  z-index: 100;
  top: -1px;
  left: 0;
  margin-left: ${(props) => props.theme.spacing(2)};
  padding: ${(props) => props.theme.spacing(1)};

  text-align: right;
  font-size: ${(props) => props.theme.font.min(1)};
  color: ${(props) => props.theme.colors.secondaryText};
  background-color: ${(props) => props.theme.colors.secondaryBg};
  border: ${(props) => props.theme.border.dark.thin};
`;
