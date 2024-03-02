import styled from 'styled-components';
 
const Container = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: ${(props) => props.maxwidth};
  margin: ${(props) => props.margin};
`;
 
Container.defaultProps = {
  maxwidth: '100%',
  margin: '0 auto',
}
 
export default Container;