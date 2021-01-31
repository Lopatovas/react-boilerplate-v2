import React from 'react';
import IButtonProps from './types';

const Button = (props: IButtonProps) => {
  const { onPress, text } = props;

  return (
    <div>
      <button onClick={onPress} type="button">
        {text}
      </button>
    </div>
  );
};

export default Button;
