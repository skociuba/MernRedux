import React from "react";
import { addPost } from "../actions/taskActions";
import { resetPost } from "../actions/taskActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ReduxInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    name: ""
    };   
    
  }

  onChangeName = (e) =>  {
    this.setState({ [e.target.name]: e.target.value });
  }



  onSubmit = (e) =>  {
    e.preventDefault();
    this.props.addPost( {
      name: this.state.name
     
    });
    this.setState({
      name: "",
  
    });
    
  }

  onReset = () => {
    this.props.resetPost();
  };

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

        
            
          
          <button type="submit">Add </button>
        </form>{" "}
        <button
          onClick={e =>
            window.confirm("Are you sure you wish to clear the page?") &&
            this.onReset(e)
          }
        >
          Clear page
        </button>
      </div>
    );
  }
}

ReduxInput.propTypes = {
  addPost: PropTypes.func.isRequired,
  resetPost: PropTypes.func.isRequired
};

export default connect(null, { addPost, resetPost })(ReduxInput);
