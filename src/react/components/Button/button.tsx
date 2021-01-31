import React from 'react';
import styled from 'styled-components';
import IButtonProps from './types';

const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.main};
`;

const Button = (props: IButtonProps) => {
  const { onPress, text } = props;

  return (
    <div>
      <StyledButton onClick={onPress} type="button">
        {text}
      </StyledButton>
    </div>
  );
};

export default Button;
