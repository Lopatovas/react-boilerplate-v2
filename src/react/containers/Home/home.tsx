import React from 'react';
import IHomePageProps from './types';
import Button from '../../components';

const HomePage = (props: IHomePageProps) => {
  const { counter, increment, decrement } = props;

  return (
    <div>
      Homepage
      <p>{counter}</p>
      <Button onPress={increment} text="Add" />
      <Button onPress={decrement} text="Remove" />
    </div>
  );
};

export default HomePage;
