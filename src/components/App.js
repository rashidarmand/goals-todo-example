import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';

class App extends Component {
  componentDidMount () {
    this.props.grabData();
  }

  render() {
    const { loading } = this.props;

    return loading
      ? <h2 style={style}>Loading...</h2>
      : (
        <div>
          <ConnectedTodos />
          <ConnectedGoals />
        </div>
      );
  }
}

const style = { textAlign: 'center' };

const mapStateToProps = ({ loading }) => ({ loading });

const mapDispatchToProps = (dispatch) => ({
  grabData() {
    dispatch(handleInitialData())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);