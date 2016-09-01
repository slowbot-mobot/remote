import React from 'react';
import styles from './App.css';

import Index from './components/index'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Index />
    );
  }
}
