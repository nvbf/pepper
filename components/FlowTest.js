// @flow
import React from 'react';

type TestProps = {
  name: string,
};

function boom(inputString: string) {
  return `${inputString} boom ${inputString}`;
}

function FlowTest(props: TestProps) {
  return <div>flow test {boom(props.name)}</div>;
}

export default FlowTest;
