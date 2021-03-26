import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import { switchPost } from '../actions/taskActions';

export class Execution extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          id: "",
          switc: ""
        };
       
      }
    
      toggleChange =(id, switc) => {
        this.props.switchPost(id, switc);
      };
     

    render() {

        const postTitles = this.props.users.map(title => (<div key = {title._id}>
              <label>
        <input type="checkbox"
          defaultChecked={this.state.switch}
          onClick={()=>this.toggleChange(title._id)}
        />
      </label>
body:{title.name}
            
         </div> ))
   
        return (
            <>
           
        
    
              {postTitles}
        
          </>
        )
    }
}
Execution.propTypes = {
    users: PropTypes.array.isRequired,
    switchPost: PropTypes.func.isRequired
  };
const mapStateToProps = (state) => ({
    users: state.users.users
})



const mapDispatchToProps = dispatch => {
    return {
                                                                             
      switchPost: id => dispatch(switchPost(id))
    }}
export default connect(mapStateToProps, mapDispatchToProps )(Execution)


