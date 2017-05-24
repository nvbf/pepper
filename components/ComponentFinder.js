import React from 'react';
import Scoreboard from './scoreboard/Scoreboard';

function ComponentFinder(props: { component: any, state: any }) {
  switch (props.component.id) {
    case 'Scoreboard':
      return <Scoreboard {...props} />;
  }
  return null;
}

export default ComponentFinder;
