import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoTextInput extends Component {
  state = {text: this.props.text || ''};

  handleChange = e => {
    this.setState({text: e.target.value.trim()});
  };

  handleBlur = () => {
    this.props.handleSave(this.state.text);
  };

  handleSubmit = (e) => {
    if (e.key === 'Enter') {
      this.props.handleSave(this.state.text);
    }
  };

  render() {
    return (
      <input className="edit"
             autoFocus={true}
             type="text"
             value={this.state.text}
             onChange={this.handleChange}
             onBlur={this.handleBlur}
             onKeyDown={this.handleSubmit}
      />
    );
  }
}

TodoTextInput.propTypes = {
  handleSave: PropTypes.func,
  text: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired,
};
export default TodoTextInput;
