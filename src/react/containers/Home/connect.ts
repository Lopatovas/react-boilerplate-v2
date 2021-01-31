import { connect, MapDispatchToProps } from 'react-redux';
import HomePage from './home';
import { incremented, decremented } from '../../../redux/home';
import { AppStore } from '../../../redux';

const mapStateToProps = (state: AppStore) => ({ counter: state.home.value });

const mapDispatchToProps = (dispatch: MapDispatchToProps<any, any>) => ({
  increment: () => dispatch(incremented()),
  decrement: () => dispatch(decremented()),
});

const Home = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default Home;
