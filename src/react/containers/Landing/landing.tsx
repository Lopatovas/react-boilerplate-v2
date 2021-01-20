import React from "react";
import Dummy from "../../components/Dummy";
import { useSelector, useDispatch } from "react-redux";
import { incremented, decremented } from "../../../redux/landing";
import { AppStore } from "../../../redux";

const Landing = () => {
  const value = useSelector((state: AppStore) =>
    state.landing.value.toString()
  );
  const dispatch = useDispatch();

  return (
    <div>
      <Dummy text={value} />
      <button onClick={() => dispatch(incremented())}>Increment</button>
      <button onClick={() => dispatch(decremented())}>Decrement</button>
    </div>
  );
};

export default Landing;
