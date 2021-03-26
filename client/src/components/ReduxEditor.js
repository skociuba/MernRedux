import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changePost } from '../actions/taskActions';


class ReduxEditor extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
      name: '',
      id: this.props.titleId
    };
  }

  onChangeName = (e) =>  {
    this.setState({ [e.target.name]: e.target.value });
  }

  

  onSubmit = (e) => {
    e.preventDefault();
    this.props.changePost(this.state);
    
    this.setState({
      name: '',
  
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChangeName}
              />
              
          <button type="submit">Save </button>
        </form>
        </div>
    );
  }
}
ReduxEditor.propTypes = {
  changePost: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => {
  return {
    changePost: _id => dispatch(changePost(_id)),
  };
};

export default connect(null, mapDispatchToProps)(ReduxEditor);
