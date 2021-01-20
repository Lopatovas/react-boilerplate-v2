import React from "react";

interface DummyProps {
  text: string;
}

const Dummy = (props: DummyProps) => {
  return <div>{props.text}</div>;
};

export default Dummy;
