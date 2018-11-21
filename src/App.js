import React from 'react'
import logo from './logo.svg';
import Form from './components/Form';
import CardList from './components/CardList';
import styles from './utilities/styles';

class App extends React.Component {
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
        <img src={logo} style={styles.appLogo} alt="logo" />
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  };
}

export default App;