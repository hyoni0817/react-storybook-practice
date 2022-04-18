import React, { FC } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => {
    switch (props.height) {
      case 'big':
        return '40px';
      default:
        return 'auto';
    }
  }};
  color: white;
  border: none;
  background: #be1de1;
  padding: 10px;
`;

const Button: FC = () => <ButtonWrapper type="button">Button</ButtonWrapper>;

export default Button;
