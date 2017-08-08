import * as React from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PageWrapper from '../pageWrapper/container';
import { changeField } from '../actions/forms';
import EmptyPageView from '../components/emptyPage';

class EmptyPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    return (
      <PageWrapper>
        <EmptyPageView {...props} />
      </PageWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    count: get(state, 'form.emptyPage.count', null)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    addCount: (count) => dispatch(changeField('emptyPage', 'count', count !== null ? count + 1 : 1))
  });
};

const mergeProps = (stateProps, dispatchProps) => {
  const { count } = stateProps;
  const { addCount } = dispatchProps;
  return ({
    count,
    addCount: () => addCount(count)
  });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EmptyPage);