import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/Actions';
import Main from './Main';
class Redux extends React.Component {
  constructor(){
    super()
    this.state={

    }
    this.handleFetchData =  this.handleFetchData.bind(this)
  }
  handleFetchData(){
    this.props.getUsers()
  }
  render () {




    return (

      <Fragment>
<h2>taskList</h2>
<button onClick={this.handleFetchData}>fetch</button>
      <Main />
      </Fragment>)
  }
}


const mapStateToProps = state => ({
 users: state.users.users
})
const mapDispatchToProps = dispatch => {
    return {
      getUsers: () => dispatch (getUsers()),
    }}
export default connect(mapStateToProps, mapDispatchToProps )(Redux)
