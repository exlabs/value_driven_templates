import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BodyContainer = styled.div``;

export const LayoutBody = styled.div.attrs(
  ({ isMobile = false }: { isMobile?: boolean }) => ({
    isMobile,
  })
)`
  padding: ${(props) => (props.isMobile ? '20px 10px' : '20px 40px')};
`;
