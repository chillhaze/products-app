import styled from '@emotion/styled';

export const ListItem = styled.li`
  position: relative;
  margin-top: ${(props) => props.theme.spacing(4)};
  margin-left: ${(props) => props.theme.spacing(4)};
  flex-basis: calc(100% / 3 - ${(props) => props.theme.spacing(4)});

  color: ${(props) => props.theme.colors.mainText};
  border: ${(props) => props.theme.border.dark.thin};
  border-radius: ${(props) => props.theme.border.radius(1)};

  transition: transform 300ms linear;

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
export const DeleteForm = styled.form`
  position: relative;

  &:hover {
    & span {
      display: block;
    }
  }
`;
export const DeleteText = styled.span`
  display: none;
  position: absolute;
  top: ${(props) => props.theme.spacing(0.8)};
  right: ${(props) => props.theme.spacing(5.5)};
  z-index: 100;
  padding-top: ${(props) => props.theme.spacing(0.5)};
  padding-right: ${(props) => props.theme.spacing(2)};
  padding-bottom: ${(props) => props.theme.spacing(0.5)};
  padding-left: ${(props) => props.theme.spacing(2)};

  font-size: ${(props) => props.theme.font.min(1.1)};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.accentColor};
`;
export const DeleteLabel = styled.label``;
export const DeleteCheckBox = styled.input`
  position: absolute;
  z-index: 200;
  top: 0px;
  right: 0px;
  margin-top: ${(props) => props.theme.spacing(1)};
  margin-right: ${(props) => props.theme.spacing(1.5)};
  padding: ${(props) => props.theme.spacing(1)};

  text-align: right;
  font-size: ${(props) => props.theme.font.min(1)};
  color: ${(props) => props.theme.colors.secondaryText};
  background-color: ${(props) => props.theme.colors.secondaryBg};
  border: ${(props) => props.theme.border.dark.thin};

  &:hover {
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing(4)};
  overflow: hidden;
  white-space: nowrap;
`;
export const Sku = styled.p`
  font-size: ${(props) => props.theme.font.min(1)};
`;
export const Name = styled.p`
  width: 250px;

  max-height: 40px;
  padding: 5px;
  text-align: center;
  font-size: ${(props) => props.theme.font.min(2)};
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Price = styled.p`
  padding: ${(props) => props.theme.spacing(1)};
`;
export const OptionsWrapper = styled.div``;
export const Option = styled.p`
  padding: ${(props) => props.theme.spacing(1)};
`;
