import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import PropTypes from 'prop-types';

/* npm start */

/* Actions‚ÌŽÀ‘• */

// Action–¼‚Ì’è‹`
const SEND = 'SEND';

// Action Creators
function send(value) {
  // Action
  return {
    type: SEND,
    value,
  };
}

/* Reducers‚ÌŽÀ‘• */

function formReducer(state, action) {
  switch (action.type) {
    case 'SEND':
      return Object.assign({}, state, {
        value: action.value,
      });
    default:
      return state;
  }
}

/* Store‚ÌŽÀ‘• */

const initialState = {
  value: null,
};
const store = createStore(formReducer, initialState);

/* View‚ÌŽÀ‘• */

// View (Container Components)
class FormApp extends React.Component {
  render() {
    return (
      <div>
        <FormInput handleClick={this.props.onClick} />
        <FormDisplay data={this.props.value} />
      </div>
    );
  }
}
FormApp.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};

// View (Presentational Components)
class FormInput extends React.Component {
  send(e) {
    e.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
    return;
  }
  render() {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}>Send</button>
      </form>
    );
  }
}
FormInput.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

// View (Presentational Components)
class FormDisplay extends React.Component {
  render() {
    return (
      <div>{this.props.data}</div>
    );
  }
}
FormDisplay.propTypes = {
  data: PropTypes.string,
};

// Connect to Redux
function mapStateToProps(state) {
  window.console.log(state);
  return {
    value: state.value,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value));
    },
  };
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);

class Apli extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </div>
    );
  }
}

export default Apli;
