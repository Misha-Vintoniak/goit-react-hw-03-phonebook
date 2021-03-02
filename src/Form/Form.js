import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './Form.module.css';
class Form extends Component {
  state = { name: '', number: '' };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;

    const isValidateForm = this.validateForm();
    if (!isValidateForm) return;

    onAdd({ id: uuid(), name, number });
    this.reset();
  };

  validateForm = () => {
    const { name } = this.state;
    const { onCheckUnick } = this.props;

    return onCheckUnick(name);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <p>Name</p>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={this.handleChange}
          />
          <p>Number</p>
          <input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={number}
            onChange={this.handleChange}
          />
          <button type="submit" disabled={name === '' || number === ''}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}
export default Form;
