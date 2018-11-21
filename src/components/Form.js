import React from 'react';
import axios from 'axios';
import styles from '../utilities/styles';

export class Form extends React.Component {
  state = {
    userName: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data)
        this.setState({ userName: '' })
      });
  }

  render() {
    return (
      <form style={styles.form} onSubmit={this.handleSubmit}>
        <input
          style={styles.inputText}
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub Username"
          required
        />
        <button style={styles.button} type="submit">Add card</button>
      </form>
    );
  }
}

export default Form;