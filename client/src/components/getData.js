import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { removePost, toggleTodo } from "../actions/taskActions";
import ReduxInput from "./ReduxInput";
import ReduxEditor from "./ReduxEditor";
import axios from "axios";
export class Main extends Component {

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/api/items")

      .then(res => this.setState({body: res.data }));
  };
  
    
       state = {
          id: "",
          body: []
        };
    
      
    
      toggle = (id, completed) => {
        this.props.toggleTodo(id, completed);
      };
      onDelete = id => {
        this.props.removePost(id);
      };

    render() {

        const postTitles = this.state.body.map(title => (<p key = {title._id}>body:{title.name}<p>content:{title._id}</p>
            
          <button onClick = {() =>  this.onDelete(title.id)}>
             Remove
          </button>
          <button
          onClick={() => {
            this.toggle(title.id, title.completed) }} >
  
          {title.completed ? 'Close' : 'Edit'}
         </button>
        <div>
          {title.completed && (
            <ReduxEditor titleBody={title.body} titleId={title.id} />
          )}
        </div></p>));

        return (
            <>
           
           <ReduxInput />
    
              {postTitles}
        
          </>
        )
    }
}
Main.propTypes = {
    titles: PropTypes.array.isRequired,
    removePost: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
  };
const mapStateToProps = (state) => ({
    titles: state.titles
})

const mapDispatchToProps = dispatch => {
    return {
      removePost: id => dispatch(removePost(id)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Main)