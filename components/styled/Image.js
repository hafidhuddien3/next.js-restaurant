import styled from 'styled-components';
 
const Image2 = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: cover;
  object-position: center;
`;
 
Image2.defaultProps = {
  width: '100%',
  height: 'auto',
};
 
export default Image2;