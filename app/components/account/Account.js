const React = require('react')
const LoginForm = require('./LoginForm')
const SignUpForm = require('./SignUpForm')
import css from './Account.css'

const Account = React.createClass({
  getInitialState(){
    return {
      newUser: null
    }
  },
  
  render () {
    return (
      <div className ="container">
        <h2>Do you have an account?</h2>
        <button onClick={()=> {(this.setState({newUser : true}))}}>No</button>
        <button onClick={()=> {(this.setState({newUser : false}))}}>Yes</button>
        {(this.state.newUser === true)
          ? <SignUpForm />
          : <LoginForm />
        }
      </div>
    )
  }
})


Account.PropTypes = {
}

module.exports = Account


