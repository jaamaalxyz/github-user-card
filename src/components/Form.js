import React from 'react';
import axios from 'axios';

export class Form extends React.Component {
  state = {
    userName: ''
  };

  handleInput = (e) => {
    this.setState({ userName: e.target.value });
  }

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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleInput}
          placeholder="GitHub Username"
          required
        />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default Form;