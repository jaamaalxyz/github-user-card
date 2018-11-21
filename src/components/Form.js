import React from 'react';

export class Form extends React.Component {
  state = {
    userName: ''
  };

  handleInput = (e) => {
    this.setState({ userName: e.target.value });
  }

  render() {
    return (
      <form>
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