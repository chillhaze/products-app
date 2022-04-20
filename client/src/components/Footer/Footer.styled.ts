import styled from '@emotion/styled';

export const Wrapper = styled.footer`
  /* position: fixed;	 */
  height: ${(props) => props.theme.spacing(20)};
  bottom: 0px;
  left: 0px;
  right: 0px;
  max-width: ${(props) => props.theme.spacing(300)};
  /* padding: 0 ${(props) => props.theme.spacing(3)}; */
  margin: 0 auto;
  margin-top: ${(props) => props.theme.spacing(10)};
  background-color: ${(props) => props.theme.colors.mainBg};
  overflow: hidden;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top: ${(props) => props.theme.border.dark.thin};
`;
export const Info = styled.p`
  text-align: center;
  font-weight: 700;
  color: ${(props) => props.theme.colors.mainText};
`;
