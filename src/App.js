import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <h1>Hello World!</h1>
        <p>We are React developer from Bangladesh</p>
      </div>
    );
  }
}

export default App;


const styles = {
  app: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(48px + 2vmin)',
    color: 'white'
  }
};