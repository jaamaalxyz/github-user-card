import React from 'react';

export class Form extends React.Component {
  state = {
    userName: ''
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.userName}
          placeholder="GitHub Username"
          required
        />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default Form;