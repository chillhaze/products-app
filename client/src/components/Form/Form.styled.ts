import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Select = styled.select`
  padding: ${(props) => props.theme.spacing(2)};
  margin-bottom: ${(props) => props.theme.spacing(10)};
  max-width: ${(props) => props.theme.spacing(93)};
  font-weight: 700;
  font-size: ${(props) => props.theme.font.base(1)};
  color: ${(props) => props.theme.colors.mainText};
  background-color: ${(props) => props.theme.colors.mainBg};
  border: ${(props) => props.theme.border.dark.thin};
  border-radius: ${(props) => props.theme.border.radius(1)};
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
