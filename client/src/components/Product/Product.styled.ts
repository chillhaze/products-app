import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.spacing(4)};
  /* justify-content: space-between; */
  /* align-items: flex-end; */
  /* margin-top: ${(props) => props.theme.spacing(5)}; */
  /* padding-bottom: ${(props) => props.theme.spacing(2)}; */
  /* border-bottom: ${(props) => props.theme.border.dark.thin}; */
`;
export const Sku = styled.p`
  font-size: ${(props) => props.theme.font.min(1)};
`;
export const Name = styled.p`
  padding: 5px;
  font-size: ${(props) => props.theme.font.min(3)};
  font-weight: 700;
`;
export const Price = styled.p``;
