import React from 'react';
import { Store } from 'App/App.store';
import { Container } from './Home.styles';

interface IProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

const Home: React.FC<IProps> = (props) => {
  return (
    <Container>
      <p>Learn React</p>
      <button onClick={props.increment}>increment</button>
      <br />
      <p>{props.counter}</p>
      <button onClick={props.decrement}>decrement</button>
    </Container>
  );
};

export default () => {
  const store = Store.useContainer();

  return (
    <Home
      counter={store.counter}
      increment={store.increment}
      decrement={store.decrement}
    />
  );
};
