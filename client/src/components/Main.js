import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { removePost, toggleTodo } from "../actions/taskActions";
import ReduxInput from "./ReduxInput";
import ReduxEditor from "./ReduxEditor";
import  Execution  from './Execution';

export class Main extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          id: "",
          name: ""
        };
    
      }
    
      toggle = (id, completed) => {
        this.props.toggleTodo(id, completed);
      };
      onDelete = id => {
        this.props.removePost(id);
      };

    render() {
    
        const postTitles = this.props.users.map(title => (<div key = {title._id}>body:{title.name} date:{title.date}
            
          <button onClick = {() =>  this.onDelete(title._id)}>
             Remove
          </button>
          <button
          onClick={() => {
            this.toggle(title._id, title.completed) }} >
  
          {title.switch ? 'Close' : 'Edit'}
         </button>
    
          {title.switch && (
            <ReduxEditor titleBody={title.name} titleId={title._id} />
          )}
       </div>));

        return (
            <>
           
           <ReduxInput />
    
              {postTitles}
              <br/>
        <Execution/>
          </>
        )
    }
}
Main.propTypes = {
    users: PropTypes.array.isRequired,
    removePost: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
  };
const mapStateToProps = (state) => ({
    users: state.users.users
})

const mapDispatchToProps = dispatch => {
    return {
      removePost: id => dispatch(removePost(id)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Main)
