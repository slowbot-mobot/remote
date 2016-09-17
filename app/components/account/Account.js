const React = require('react')
const LoginForm = require('./LoginForm')
const SignUpForm = require('./SignUpForm')
import css from './Account.css'

const Account = React.createClass({
  render () {
    return (
      <div className={css.component}>
        <LoginForm />
        <SignUpForm />
      </div>
    )
  }
})


Account.PropTypes = {
}

module.exports = Account


