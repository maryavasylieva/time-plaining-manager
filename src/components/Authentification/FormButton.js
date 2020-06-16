import styled from 'styled-components';

const FormButton = styled.button`
  width: 312px;
  height: 60px;
  font-size: 16px;
  text-align: center;
  background-color: #ff6b08;
  color: #fff;
  border: none;
  margin: 0 auto;
  padding: 0;
  transition: all 0.5s;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.75);
  }
`;

export default FormButton;
