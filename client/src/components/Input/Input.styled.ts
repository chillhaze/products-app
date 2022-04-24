import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  vertical-align: middle;
  margin-bottom: ${(props) => props.theme.spacing(10)};
`;
export const InputLabel = styled.label`
  display: block;
  width: ${(props) => props.theme.spacing(30)};

  font-weight: 700;
  color: ${(props) => props.theme.colors.mainText};
`;
export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  vertical-align: middle;
`;
export const InputItem = styled.input`
  width: ${(props) => props.theme.spacing(65)};
  padding: ${(props) => props.theme.spacing(2)};
  font-style: italic;
  color: ${(props) => props.theme.colors.mainText};
  background-color: ${(props) => props.theme.colors.mainBg};
  border: ${(props) => props.theme.border.dark.thin};
  border-radius: ${(props) => props.theme.border.radius(1)};

  @media (max-width: 450px) {
    width: ${(props) => props.theme.spacing(50)};
  }

  &:hover {
    transform: scale(1.01);
  }
  &:focus {
    transform: scale(1.01);
    outline-offset: 2px;
    outline-style: solid;
    outline: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
export const Error = styled.p`
  position: absolute;
  top: ${(props) => props.theme.spacing(-4)};
  left: 0;
  z-index: 10;

  font-size: ${(props) => props.theme.font.min(1.1)};
  color: ${(props) => props.theme.colors.accentColor};
`;
