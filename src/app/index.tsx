import * as React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link, hashHistory } from 'react-router';
import EmptyPage from './containers/emptyPage';

class App extends React.Component<any, any>{
  render() {
    return (
      <div>
        <Link to='/empty'>empty</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({});
};

const mapDispatchToProps = (dispatch) => {
  return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(App);