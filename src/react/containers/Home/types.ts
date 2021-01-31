interface IReduxProps {
  counter: number;
}

interface IDispatchProps {
  increment: () => void;
  decrement: () => void;
}

type IHomePageProps = IReduxProps & IDispatchProps;

export default IHomePageProps;
