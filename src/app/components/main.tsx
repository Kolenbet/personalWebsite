import * as React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div>
      <Link to='/about'>To about page </Link>
      <Link to='/contacts'>To contacts page </Link>
      {props.count}
      <button onClick={props.addCount}> Click me!</button>
    </div>
  );
};