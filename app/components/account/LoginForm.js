const React = require('react')
import css from './LoginForm.css'

const LoginForm = React.createClass({
  render () {
    return (
      <div className={css.component} type="loginWrapper">
        <h2>Login</h2>
        <div className={css.form}>
          <input type="email" name="email" placeholder="your email address" />
          <input type="password" name="password" placeholder="account password" />
          <button onClick={function(){console.log("Works")}}>Submit</button>
          <br/>
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    )
  }
})


LoginForm.PropTypes = {
}

module.exports = LoginForm


