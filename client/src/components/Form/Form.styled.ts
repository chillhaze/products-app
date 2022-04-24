import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  min-height: ${(props) => props.theme.spacing(120)};

  @media (max-width: 821px) {
    align-items: center;
    min-height: ${(props) => props.theme.spacing(120)};
  }
  @media (max-width: 380px) {
    min-height: ${(props) => props.theme.spacing(110)};
  }
`;
export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing(10)};
`;
export const SelectLabel = styled.p`
  width: ${(props) => props.theme.spacing(30)};
  font-weight: 700;
  font-size: ${(props) => props.theme.font.base(1)};
  color: ${(props) => props.theme.colors.mainText};
`;
export const Select = styled.select`
  width: ${(props) => props.theme.spacing(65)};
  padding: ${(props) => props.theme.spacing(2)};
  max-width: ${(props) => props.theme.spacing(93)};
  font-weight: 700;
  font-size: ${(props) => props.theme.font.base(1)};
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
