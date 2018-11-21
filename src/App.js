import React, { Component } from 'react';
import headerLogo from './utilities/reactgithub.jpg';
import Form from './components/Form';
import CardList from './components/CardList';

class App extends Component {
  state = {
    cards: []
  };

  addNewCard = cardInfo => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div style={styles.app}>
        <img src={headerLogo} style={{ height: '20vmin' }} alt="react&github"/>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
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