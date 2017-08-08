import * as React from 'react';

import {connect} from 'react-redux';

class PageWrapper extends React.Component<any, any> {
  render() {
    const props = this.props;
    return (
      <div>
        {props.children}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({});
};

const mapDispatchToProps = (dispatch) => {
  return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);