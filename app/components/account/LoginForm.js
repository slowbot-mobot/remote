const React = require('react')
import css from './LoginForm.css'

const LoginForm = React.createClass({
  render () {
    return (
      <div className={css.component}>
        <h2>Login</h2>
        <div className={css.form}>
          <input type="text" name="email" placeholder="your email address" />
          <input type="password" name="password" placeholder="account password" />
          <button>Submit</button>
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    )
  }
})


LoginForm.PropTypes = {
}

module.exports = LoginForm


